import Image from "next/image";
import Link from "next/link";

const WeddingInspiration = () => {
  return (
    <div className="flex items-center justify-cente flex-wrap gap-6 mb-20 md:mb-28 lg:mb-36">
      <Link href="/wedding-inspiration">
        <div className="w-full h-56">
          <Image
            src="/images/wedding.png"
            alt="Wedding Inspiration"
            className="w-full h-full hover:scale-105 transition-all"
            width={100}
            height={100}
            priority
            unoptimized
          />
        </div>
      </Link>
      <Link href="/agbada-wedding-inspiration">
        <div className="w-full h-56">
          <Image
            src="/images/agbada-wedding.png"
            alt="Agbada Wedding Inspiration"
            className="w-full h-full hover:scale-105 transition-all"
            width={100}
            height={100}
            priority
            unoptimized
          />
        </div>
      </Link>
      <Link href="/jacket-wedding-inspiration">
        <div className="w-full h-56">
          <Image
            src="/images/jacket-wedding.png"
            alt="Jacket Wedding Inspiration"
            className="w-full h-full hover:scale-105 transition-all"
            width={100}
            height={100}
            priority
            unoptimized
          />
        </div>
      </Link>
    </div>
  );
};
export default WeddingInspiration;
