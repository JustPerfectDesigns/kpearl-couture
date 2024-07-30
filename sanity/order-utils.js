import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "kpearl-couture",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

// Function to get orders by email and sort by the latest
export async function getOrdersByEmail(email) {
  try {
    // Query orders from Sanity with a GROQ query
    const orders = await client.fetch(
      `*[_type == 'order' && email == $email] | order(createdAt desc)`,
      { email },
      {
        next: {
          revalidate: 1, //revalidate every 30 days
        },
      }
    );

    // Return the sorted orders
    return orders;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error getting orders:", error.message);
    throw new Error("Failed to get orders");
  }
}

export async function createOrder(email, cart) {
  try {
    const orderCreationPromises = [];

    cart.forEach((orderData) => {
      const { name, quantity, price, sizes, additionalInfo } = orderData;

      const sizesArray = Object.entries(sizes).map(([type, value], index) => ({
        _key: `size-${index}`,
        type,
        value: parseInt(value, 10),
      }));

      const orderCreationPromise = client.create({
        _type: "order",
        name,
        qty: quantity,
        price,
        additionalInfo, // Include additional info
        sizes: sizesArray,
        paid: true,
        delivered: false,
        email: email,
        createdAt: new Date().toISOString(),
      });

      orderCreationPromises.push(orderCreationPromise);
    });

    const createdOrders = await Promise.all(orderCreationPromises);
    return createdOrders;
  } catch (error) {
    console.error("Error creating order:", error.message);
    throw new Error("Failed to create order");
  }
}
