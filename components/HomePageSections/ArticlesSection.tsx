import SectionTemplate from "../SectionTemplate";
import Image from "next/image";
import FeaturedArticle from "@/public/featured-article.png";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { useRouter } from "next/router";

export default function ArticlesSection() {
  const router = useRouter();
  return (
    <SectionTemplate sectionTitle="Featured Article">
      <section>
        <figure className="flex flex-col items-center gap-y-[1rem]">
          <Image
            alt="a cool picture"
            src={FeaturedArticle}
            priority={true}
            className="object-contain max-h-[80%] max-w-[80%]"
          />
        </figure>
        <div className="max-h-[20%] text-center mt-2">
          <p className="text-[4rem] font-extrabold text-white">
            My Struggles with Red Squiggly Lines
          </p>
          <p className="text-[2.75rem] font-bold">
            Overcoming Programming Errors
          </p>
          <PrimaryButton
            title="Read it on Hashnode"
            onClick={() =>
              (window.location.href =
                "https://jemeni11.hashnode.dev/my-struggles-with-red-squiggly-lines")
            }
            buttonClass="my-2 bg-[rgb(37,99,235)] mr-2 !border-[rgb(37,99,235)]"
          />
          <PrimaryButton
            title="Check out my other articles"
            onClick={() => router.push("/articles")}
            buttonClass="ml-2"
          />
        </div>
      </section>
    </SectionTemplate>
  );
}
