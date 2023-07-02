import Image from "next/image";
import Link from "next/link";
import CartoonMe_NoBG from "../public/cartoon_me-removebg.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between w-full min-h-[13.75vh] py-[1.5vh] px-12">
      <Link href="/" className="hidden lg:block">
        <div className="flex items-center">
          <Image
            src={CartoonMe_NoBG}
            alt="Icon"
            className="object-contain max-h-[10vh] max-w-[10%]"
          />
          <div>
            <p className="text-xl font-bold">Emmanuel C. Jemeni</p>
            <p className="opacity-[.85]">@Jemeni11</p>
          </div>
        </div>
      </Link>
      <ul className="flex-[2_2_0%] list-none flex gap-5 lg:justify-end justify-center items-center text-2xl">
        {["", "about", "tools", "projects", "articles", "contact"].map(
          (listItem) => {
            return listItem === "" ? (
              <NavListItem key={listItem + "_"} text="Home" href="/" />
            ) : (
              <NavListItem
                key={listItem + "_"}
                text={
                  listItem.slice(0, 1).toLocaleUpperCase() + listItem.slice(1)
                }
                href={"/" + listItem}
              />
            );
          }
        )}
      </ul>
    </nav>
  );
}

const NavListItem = ({ href, text }: { href: string; text: string }) => {
  return (
    <li className="underline-offset-[16px] transition-underline-offset ease-in-out duration-200 hover:underline hover:underline-offset-8">
      <Link href={href}>{text}</Link>
    </li>
  );
};
