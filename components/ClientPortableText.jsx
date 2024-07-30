// components/ClientPortableText.js
"use client";

import React from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

const ClientPortableText = ({ value }) => {
  return <PortableText value={value} components={myPortableTextComponents} />;
};

export default ClientPortableText;

const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      const imageUrl = urlFor(value).width(600).height(800).url();

      return (
        <div className="my-4">
          <Image
            width={800}
            height={600}
            alt={value.alt || "Blog post image"}
            src={imageUrl}
            objectFit="contain"
            className="h-full w-auto object-cover"
          />
        </div>
      );
    },
  },
};
