import { JSX } from "react";
import { FaCreditCard } from "react-icons/fa6";
import Link from "next/link";

export function GallerySection(): JSX.Element {
  return (
    <section className="flex flex-col my-6 gap-1 px-4 sm:px-6 mb-4">
      <header className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold sm:font-normal">Gallery</h3>

        <div className="inline-flex gap-2">
          <span className="inline-flex gap-1.5 text-[.55em] relative bg-[#F6F6F6] dark:border dark:bg-white/10 dark:text-white py-2 px-2.5 rounded-xl">
            <Link
              href={"/legal"}
              className="absolute w-full h-full top-0 left-0"
            ></Link>
            <FaCreditCard className="text-sm -mt-0.5" />
            Legal
          </span>

          <span className="inline-flex gap-1.5 text-[.55em] relative bg-[#F6F6F6] dark:border dark:bg-white/10 dark:text-white py-2 px-2.5 rounded-xl">
            <Link
              href={"/pricing"}
              className="absolute w-full h-full top-0 left-0"
            ></Link>
            <FaCreditCard className="text-sm -mt-0.5" />
            Pricing
          </span>
        </div>
      </header>
    </section>
  );
}
