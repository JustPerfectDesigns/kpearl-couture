import Image from "next/image";
import React from "react";

const CategoryHero = ({ image, title }) => {
	return (
		<div>
			<div className="relative h-[350px] md:h-[500px] w-full">
				<Image
					src={image}
					alt="Category Image"
					layout="fill"
					objectFit="cover"
					className="object-center z-[-1]"
				/>
			</div>
			<div className="ml-5 mr-5 md:container lg:-mt-[25rem] lg:mb-64 -mt-[28rem] mb-[20rem] md:-mt-[30rem] md:mb-[22rem]">
				<h1 className="text-white text-4xl md:text-5xl lg:text-7xl md:w-4/5 font-bold leading-10">
					{title}
				</h1>
			</div>
		</div>
	);
};

export default CategoryHero;
