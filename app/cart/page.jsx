"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MinusCircle, PlusCircle } from "lucide-react";
import Link from "next/link";
import useCartStore from "@/cartStore";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { useUser } from "@clerk/nextjs";
import { PaystackButton } from "react-paystack";
import { formatCurrency } from "@/utils/formatCurrency";
import { createOrder } from "@/sanity/order-utils";
import CartImage from "../../public/images/animated_cart.gif";

const Cart = () => {
  const router = useRouter();
  const { isSignedIn, user, isLoaded } = useUser();
  const {
    persistCart,
    cart,
    removeFromCart,
    totalItems,
    cartTotal,
    clearCart,
  } = useCartStore();

  useEffect(() => {
    persistCart();
  }, [persistCart]);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const config = {
    reference: new Date().getTime().toString(),
    email: user?.emailAddresses[0]?.emailAddress,
    amount: cartTotal * 100, // amount in kobo
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
  };

  const handleSuccess = async (reference) => {
    try {
      toast.success("Payment Successful!");
      const email = user?.emailAddresses[0]?.emailAddress;
      await createOrder(email, cart);
      clearCart();
      router.push("/order");
    } catch (error) {
      toast.error(`Failed to create order: ${error.message}`);
    }
  };

  const handleClose = () => {
    toast.error("Payment was not completed, window closed.");
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="mt-4 lg:mt-28">
      {cart.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <h2 className="text-center text-2xl md:text-left md:text-4xl lg:text-6xl">
            My Cart {totalItems} item(s)
          </h2>
          <div className="mb-8 mt-4">
            <Separator />
          </div>
        </div>
      )}

      {cart.length === 0 ? (
        <div className="mt-32 lg:mt-48 flex flex-col justify-center items-center">
          <Image
            src={CartImage}
            alt="Empty Cart"
            width={208}
            height={208}
            unoptimized
            priority
            className="w-52 h-52 mb-4"
          />
          <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-center">
            Your cart is empty
          </h2>
          <p className="text-lg text-gray-600 mb-4 text-center">
            It looks like you haven't added any items to your cart yet.
          </p>
          <Link href="/">
            <Button className="rounded-none">Go Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="md:gap-6 lg:grid lg:grid-cols-5 lg:gap-20">
          <div className="lg:col-start-1 lg:col-end-4">
            {cart.map((item) => (
              <div key={item._id}>
                <div className="cart-item flex items-center gap-4 md:gap-8">
                  <Link href={`/products`} className="">
                    <div className="cart-item-img h-[100px] w-[80px] object-cover md:h-[170px] md:w-[120px]">
                      <Image
                        src={item.extraImages[0]}
                        alt={item.name}
                        width={100}
                        height={100}
                        priority
                        unoptimized
                      />
                    </div>
                  </Link>
                  <div className="flex w-full flex-col justify-between">
                    <div className="w-full">
                      <h3 className="font-gilda line-clamp-1 md:line-clamp-2 text-base font-medium leading-none md:text-2xl lg:text-3xl">
                        {item.name}
                      </h3>
                      <p className="mt-1 line-clamp-1 text-[.72rem] md:text-sm text-[#8b8b8b] md:mt-2 md:line-clamp-2">
                        <PortableText value={item.description} />
                      </p>
                    </div>
                    <div className="mt-2 md:flex md:items-center md:justify-between md:mt-6">
                      <span className="text-[.90rem] font-gilda font-bold md:text-2xl md:font-medium">
                        {formatCurrency(item.price)}
                      </span>
                      <div className="flex items-center gap-4 md:gap-8">
                        <Button
                          variant="ghost"
                          type="button"
                          onClick={() => {
                            handleRemoveFromCart(item?._id);
                          }}
                          className="p-0 md:px-4 md:py-2"
                        >
                          <i className="ri-delete-bin-line text-xl text-red-500 md:text-2xl"></i>
                        </Button>
                        <div className="flex items-center justify-center gap-2 md:gap-6">
                          <Button
                            variant="ghost"
                            type="button"
                            onClick={() => {
                              useCartStore
                                .getState()
                                .decreaseQuantity(item._id);
                            }}
                          >
                            <MinusCircle className="w-[18px] md:w-[21px]" />
                          </Button>
                          <span className="text-[#848484]">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            type="button"
                            onClick={() => {
                              useCartStore
                                .getState()
                                .increaseQuantity(item._id);
                            }}
                          >
                            <PlusCircle className="w-[18px] md:w-[21px]" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-6">
                  <Separator />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#F9F9F9] p-6 text-black md:sticky md:top-24 lg:col-start-4 lg:col-end-6 lg:h-[30rem]">
            <span className="mb-4 block font-medium md:text-lg">
              Order Summary
            </span>
            <ul className="relative flex flex-col gap-1">
              {cart.map((item) => (
                <li
                  key={item.slug}
                  className="flex items-center justify-between gap-12"
                >
                  <div className="flex gap-3">
                    <span className="justify-centeritemc flex text-sm font-medium text-[#181818]">
                      <i className="ri-close-line"></i>
                      {item.quantity}
                    </span>
                    <span className="line-clamp-1 text-sm font-medium text-[#656565]">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-[#181818]">
                    {formatCurrency(item.price)}
                  </span>
                </li>
              ))}

              <div className="my-6">
                <Separator className="bg-[#CCCCCC]" />
              </div>

              <li className="flex items-center justify-between">
                <span className="font-medium md:text-lg">Order Total</span>
                <span className="text-xl font-semibold">
                  {formatCurrency(cartTotal)}
                </span>
              </li>

              <div className="my-6">
                <Separator className="bg-[#CCCCCC]" />
              </div>

              <li className="mt-6">
                <PaystackButton
                  className="w-full rounded-none bg-black text-white p-2"
                  {...config}
                  text="Proceed to Checkout"
                  onSuccess={(reference) => handleSuccess(reference)}
                  onClose={handleClose}
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
