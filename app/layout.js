import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import "remixicon/fonts/remixicon.css";
import Navigation from "@/components/navigation/Navigation";
import MobileNavbar from "@/components/navigation/MobileNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KPearl Couture",
  description: "The No. 1 Fashion Store in Nigeria",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          {/* <Navigation />
          <div className="lg:hidden py-4 bg-white">
            <MobileNavbar />
          </div> */}
          {/* <main className="ui__container mt-12 lg:mt-24"> */}
          {/* <Navbar /> */}
          {/* {children} */}
          <div className="h-screen ui__container flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl lg:text-8xl tracking-tight text-slate-900 text-center font-bold">
              This Website is currently unavailable till further notice.
            </h1>
            <p className="text-xl md:text-2xl text-center text-slate-500">
              Please, reach the maker on{" "}
              <a href="tel:+2348086563244" className="underline text-blue-700">
                +2348086563244
              </a>{" "}
              for more information.
            </p>
          </div>
          {/* </main> */}
          {/* <Footer /> */}

          {/* <div className="fixed bottom-6 right-6">
            <a
              href="https://wa.me/+2348068499883?text=Hello, I need an info from KPearl Couture website."
              target="_blank"
            >
              <img
                src="/images/chat-icon.png"
                alt=""
                className="w-12 md:w-14 opacity-80"
              />
            </a>
          </div> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
