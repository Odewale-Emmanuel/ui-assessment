import _404 from "@/public/404.svg";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="w-screen h-screen flex flex-col gap-1 items-center justify-center">
      <Image
        className="dark:invert h-[30%] aspect-square"
        src={_404}
        alt="page not foung"
      />
      <span className="text-[.6rem] text-center sm:font-semibold">
        Oops, this page is under construction!
      </span>
    </div>
  );
}
