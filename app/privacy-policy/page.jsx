const page = () => {
  return (
    <div className="max-w-[680px] mx-auto text-center">
      <h2 className="text-center text-2xl md:text-4xl lg:text-6xl">
        Privacy Policy
      </h2>

      <p className="font-bold text-[.9rem] mb-2 mt-5">1. Introduction</p>

      <p className="text-center text-gray-500 mt-2">
        KPearl Couture is committed to protecting your privacy. This Privacy
        Policy explains how we collect, use, and share your personal information
        when you visit our website or make a purchase.
      </p>

      <ul className="mb-2 mt-5">
        <p className="font-bold text-[.9rem] underline">
          2. Information We Collect
        </p>
        <li className="text-center text-gray-500 mt-2">
          <strong>Personal Information:</strong> We collect personal information
          such as your name, email address, phone number, shipping address, and
          payment details when you place an order.
        </li>
        <li className="text-center text-gray-500 mt-2">
          <strong>Usage Data:</strong> We collect information about your
          interaction with our website, including IP address, browser type, and
          browsing behavior.
        </li>

        <p className="font-bold text-[.9rem] underline mt-4">
          3. How We Use Your Information
        </p>
        <li className="text-center text-gray-500 mt-2">
          <strong>Order Processing:</strong> We use your personal information to
          process and fulfill your orders.
        </li>
        <li className="text-center text-gray-500 mt-2">
          <strong>Customer Service:</strong> We use your information to
          communicate with you regarding your orders and provide customer
          support.
        </li>
        <li className="text-center text-gray-500 mt-2">
          <strong>Marketing</strong> With your consent, we may use your
          information to send you promotional materials and updates.
        </li>
      </ul>

      <h2 className="text-center text-2xl md:text-4xl lg:text-6xl mt-24">
        Terms and Conditions
      </h2>

      <p className="font-bold text-[.9rem] mb-2 mt-5">1. Introduction</p>

      <p className="text-center text-gray-500 mt-2">
        Welcome to KPearl Couture. These terms and conditions govern your use of
        our website and the purchase of our products. By accessing or using our
        website, you agree to comply with these terms.
        <br />
        <br />
        Use of the Website
        <br />
        <br />
        Eligibility: You must be at least 18 years old to use our website.
        <br />
        <br />
        product Information:
        <br />
        <br />
        Accuracy: We strive to ensure that product descriptions, images, and
        prices are accurate.
        <br />
        <br />
        Availability: Products are subject to availability. We reserve the right
        to limit quantities or discontinue any product at any time.
        <br />
        <br />
        • Pricing: Prices are listed in the applicable currency and do not
        include shipping and handling fees, which will be added at checkout.
        <br />
        <br />• Payment: We accept various payment methods. Payment must be made
        in full before the order is shipped.
      </p>

      <ul className="mb-2 mt-5">
        {/* <p className="font-bold text-[.9rem] underline">Pricing</p> */}
        <li className="text-center text-gray-500 mt-2">
          <strong>Pricing:</strong> Prices are listed in the applicable currency
          and do not include shipping and handling fees, which will be added at
          checkout.
        </li>
        <li className="text-center text-gray-500 mt-2">
          <strong>Payment:</strong> We accept various payment methods. Payment
          must be made in full before the order is shipped.
        </li>

        <p className="font-bold text-[.9rem] underline mt-4">
          Shipping and Delivery
        </p>
        <li className="text-center text-gray-500 mt-2">
          <strong>Shipping Policy:</strong> Shipping times and costs will vary
          depending on your location and the shipping method chosen.
        </li>
        <li className="text-center text-gray-500 mt-2">
          <strong>Delivery:</strong> We are not responsible for delays caused by
          external factors such as customs, weather, or carrier issues.
        </li>

        <p className="font-bold text-[.9rem] underline mt-4">
          Returns and Refunds
        </p>
        <li className="text-center text-gray-500 mt-2">
          <strong>Return Policy:</strong> You may return items within 14 days of
          receipt for a refund or exchange, provided the items are unused and in
          their original condition.
        </li>
        <li className="text-center text-gray-500 mt-2">
          <strong>Refunds:</strong> Refunds will be processed within 14 days of
          receiving the returned items.
        </li>

        <p className="font-bold text-[.9rem] underline mt-4">
          Intellectual Property
        </p>
        <li className="text-center text-gray-500 mt-2">
          <strong>Ownership:</strong> All content on the website, including but
          not limited to text, graphics, logos, and images, is the property of
          KPearl Couture and is protected by intellectual property laws.
        </li>
        <li className="text-center text-gray-500 mt-2">
          <strong>Restrictions:</strong> You may not reproduce, distribute, or
          modify any content from the website without our prior written consent.
        </li>
      </ul>
    </div>
  );
};
export default page;
