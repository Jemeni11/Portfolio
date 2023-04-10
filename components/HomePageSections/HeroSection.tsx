import Image from "next/image";
import { Sriracha } from "@next/font/google";
import CartoonMe from "@/public/cool_icon.png";

const SrirachaFont = Sriracha({ weight: "400", subsets: ["latin"] });

export default function HeroSection() {
  return (
    <div className="min-h-[85vh] w-full flex">
      <div className="flex-1 flex justify-center w-2/4 gap-[1.5rem] flex-col items-center">
        <h1 className="text-[3rem] font-extrabold">Hey, I'm Emmanuel</h1>
        <p
          className={`${SrirachaFont.className} text-[1.9rem] text-center px-12`}
        >
          A Front-end Web Developer
        </p>
      </div>
      <div className="flex-1 flex justify-center w-2/4">
        <figure className="flex flex-col items-center gap-y-[1rem]">
          <Image
            alt="a cool picture"
            src={CartoonMe}
            priority={true}
            className="object-contain max-h-[80vh] max-w-[80%]"
          />
          <figcaption className="italic">
            Created with{" "}
            <a
              href="https://www.drawkit.com/"
              className="underline text-neutral-100"
            >
              Drawkit's Notion Style Avatar Creator
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
