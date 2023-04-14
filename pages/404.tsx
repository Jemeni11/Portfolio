import Head from "next/head";
import Link from "next/link";
import Lottie from "lottie-react";
import NotFound404 from "@/animations/404.json";

const Error404Page = () => {
  function ListItem({ href, text }: { href: string; text: string }) {
    return (
      <li className="py-1 w-[30%] border border-[#1f2028] hover:border-white hover:rounded-2xl">
        <Link href={href}>
          <p className="text-xl">{text}</p>
          <p className="text-white/[.725] text-sm">{href}</p>
        </Link>
      </li>
    );
  }
  return (
    <>
      <Head>
        <meta
          name="description"
          content="You have entered a place only rumored to exist: Page 404!"
        />
        <title>Error | Emmanuel Jemeni</title>
      </Head>
      <div className="flex">
        <div className="flex-1 flex flex-col text-center gap-y-4">
          <h1 className="text-5xl font-extrabold text-white/[.725]">
            Page Not Found
          </h1>
          <p className="text-2xl w-[35ch] mx-auto text-center">
            Are you sure that URL is correct? Head to one of these pages
            instead:
          </p>
          <ul className="list-none text-2xl flex flex-col gap-y-2 items-center">
            {["", "about", "tools", "projects", "articles", "contact"].map(
              (listItem) => {
                return listItem === "" ? (
                  <ListItem key={listItem + "_"} text="Home" href="/" />
                ) : (
                  <ListItem
                    key={listItem + "_"}
                    text={
                      listItem.slice(0, 1).toLocaleUpperCase() +
                      listItem.slice(1)
                    }
                    href={"/" + listItem}
                  />
                );
              }
            )}
          </ul>
        </div>
        <div className="flex-1">
          <Lottie
            animationData={NotFound404}
            loop={true}
            style={{
              maxWidth: "80%",
              marginLeft: "10%",
              marginRight: "10%",
              height: "85vh",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Error404Page;
