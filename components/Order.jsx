import { useUser } from "@clerk/nextjs";
import { getOrdersByEmail } from "@/sanity/order-utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Order() {
  const user = await currentUser();

  if (!user) return redirect("/sign-in");

  const fetchedOrders = await getOrdersByEmail(
    user?.emailAddresses[0]?.emailAddress
  );

  return (
    <div className="w-full mx-auto mt-4 lg:mt-28">
      <h1 className="text-center text-2xl md:text-4xl lg:text-6xl">
        My Orders
      </h1>

      {/* <table className="w-full border-collapse">
        <thead>
          <tr className="text-[#5B20B6] border-b border-gray-200">
            <th className="py-2 px-4">Product</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Payment Status</th>
            <th className="py-2 px-4">Delivery Status</th>
          </tr>
        </thead>
        <tbody>
          {fetchedOrders.map((order) => (
            <tr
              key={order._id}
              className="hover:bg-gray-50 text-center border-b border-gray-300 text-[#5B20B6]"
            >
              <td className="py-2 px-4 flex items-center">{order.name}</td>
              <td className="py-2 px-4">{order.qty}</td>
              <td className="py-2 px-4">${order.price}</td>
              <td className="py-2 px-4">
                {order.paid ? (
                  <span className="text-green-500">Paid</span>
                ) : (
                  <span className="text-red-500">Unpaid</span>
                )}
              </td>
              <td className="py-2 px-4">
                {order.delivered ? (
                  <span className="text-green-500">Delivered</span>
                ) : (
                  <span className="text-red-500">In transit</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <div className="relative overflow-x-auto mt-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-3">
                Deliver Status
              </th>
            </tr>
          </thead>
          <tbody>
            {fetchedOrders.map((order) => (
              <tr
                key={order._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 max-w-96 dark:text-white"
                >
                  {order.name}
                </th>
                <td className="px-6 py-4">{order.qty}</td>
                <td className="px-6 py-4">{order.price}</td>
                <td className="px-6 py-4">
                  {order.paid ? (
                    <span className="text-green-500">Paid</span>
                  ) : (
                    <span className="text-red-500">Unpaid</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  {order.delivered ? (
                    <span className="text-green-500">Delivered</span>
                  ) : (
                    <span className="text-red-500">In transit</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
