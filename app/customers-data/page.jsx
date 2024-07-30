import { currentUser } from "@clerk/nextjs/server";
import SingleCustomerData from "../../components/SingleCustomerData";
import { getCustomerData } from "@/sanity/customerData-utils";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

const CustomerData = async () => {
  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress;

  if (email !== "ainagabrielcompany@gmail.com") {
    // alert("You're not authorized");
    redirect("/sign-in");
  }

  const customers = await getCustomerData();

  return (
    <div className="w-full mx-auto mt-28">
      <h1 className="text-center text-2xl md:text-4xl lg:text-6xl">
        Customers Data
      </h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="pb-4 bg-white dark:bg-gray-900">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email Address
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer?._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 max-w-96 dark:text-white"
                >
                  {customer?.name}
                </th>
                <td className="px-6 py-4">{customer?.email}</td>
                <td className="px-6 py-4">{customer?.phone}</td>
                <td className="px-6 py-4">
                  <SingleCustomerData customer={customer} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CustomerData;
