"use client";

import { useState } from "react";
import GoogleMap from "@/components/GoogleMap";
import { Button } from "@/components/ui/button";
import { createContact } from "@/sanity/contact-utils";
import { toast } from "react-hot-toast";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    issue: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await createContact(
        formData.firstName,
        formData.lastName,
        formData.phoneNumber,
        formData.email,
        formData.issue
      );
      setSuccess(
        "Your message has been sent successfully. We have received your message and we will revert back at the earliest time possible."
      );
      toast.success("Message sent successfully");
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        issue: "",
      });
    } catch (err) {
      setError("Failed to send your message. Please try again.");
      toast.error("Failed to send your message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section md:px-24 grid lg:grid-cols-2 gap-12 lg:gap-14">
      <div>
        <h2 className="text-2xl text-center lg:text-left md:text-4xl lg:text-6xl">
          Contact Us
        </h2>
        <p className="text-[#6B6B6B] text-center lg:text-left mt-2">
          We are always available to take your calls, reply to your messages,
          chats and emails.
        </p>

        <div className="mt-16">
          <span className="text-[#6B6B6B] text-center lg:text-left block">
            Phone:
          </span>
          <span className="block font-medium text-center lg:text-left">
            <Link href="tel:+2348101639720" target="_blank">
              +234 810 163 9720
            </Link>
          </span>
        </div>

        <div className="mt-10">
          <span className="text-[#6B6B6B] text-center lg:text-left block">
            Email:
          </span>
          <span className="block font-medium text-center lg:text-left">
            <Link href="mailto:info@kpearlcouture.ng" target="_blank">
              info@kpearlcouture.ng
            </Link>
          </span>
        </div>

        <div className="mt-10">
          <span className="text-[#6B6B6B] text-center lg:text-left block">
            Store Address:
          </span>
          <span className="block font-medium text-center lg:text-left">
            17b Kusenla Rd, Lekki Penninsula II, Lekki 106104, Lagos
          </span>
        </div>

        <div className="mt-10 h-72">
          <GoogleMap />
        </div>
      </div>

      <div className="bg-[#F9F9F9] p-5">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-4">
            <div>
              <label htmlFor="firstName" className="capitalize">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="mt-2 w-full border bg-[#e6e6e6] px-4 py-2 text-[#000] outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="capitalize">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="mt-2 w-full border bg-[#e6e6e6] px-4 py-2 text-[#000] outline-none"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div>
              <label htmlFor="email" className="capitalize">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@doe.com"
                className="mt-2 w-full border bg-[#e6e6e6] px-4 py-2 text-[#000] outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="capitalize">
                Mobile number
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="234 567 8900"
                className="mt-2 w-full border bg-[#e6e6e6] px-4 py-2 text-[#000] outline-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <div>
              <label htmlFor="issue" className="capitalize">
                Message / Issue
              </label>
              <textarea
                name="issue"
                id="issue"
                value={formData.issue}
                onChange={handleChange}
                placeholder="I want to get more details about this specific agbada with the name..."
                className="mt-2 w-full border bg-[#e6e6e6] px-4 py-2 text-[#000] outline-none"
                rows={5}
                required
              />
            </div>
          </div>

          <div className="mt-6 w-full">
            <Button
              type="submit"
              className="w-full rounded-none"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {success && <p className="text-green-500 mt-2">{success}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
