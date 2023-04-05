import Image from "next/image";
import Link from "next/link";
import CartoonMe_NoBG from "../public/cartoon_me-removebg.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between w-full min-h-[13.75vh] py-[1.5vh] px-12">
      <Link href="/">
        <div className="flex items-center">
          <Image
            src={CartoonMe_NoBG}
            alt="Icon"
            className="object-contain max-h-[10vh] max-w-[10%]"
          />
          <div className="">
            <p className="text-xl font-bold">Emmanuel C. Jemeni</p>
            <p className="opacity-[.85]">@Jemeni11</p>
          </div>
        </div>
      </Link>
      <ul className="flex-[2_2_0%] list-none flex gap-5 justify-end items-center text-2xl">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tools">Tools</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/articles">Articles</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
