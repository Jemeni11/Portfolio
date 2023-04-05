import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SectionTemplate from "./SectionTemplate";
import { useRouter } from "next/router";
import Image from "next/image";
import CoffeeCall from "@/public/Coffee_call.svg";

export default function ContactSection() {
  const router = useRouter();
  return (
    <SectionTemplate sectionTitle="Contact Me">
      <div className="flex w-[85%] gap-4 flex-col items-center">
        <div>
          <PrimaryButton
            title="Head to Contacts"
            onClick={() => router.push("/contact")}
            buttonClass="hover:bg-white hover:text-black"
          />
        </div>
        <figure className="flex flex-col items-center gap-y-[0.5rem] mb-3">
          <Image
            alt="I'm on a call"
            src={CoffeeCall}
            priority={true}
            className="object-contain max-h-[55vh] max-w-[80%]"
          />
          <figcaption className="italic">
            Coffee Call from Phonies by DrawKit Vector Illustrations
          </figcaption>
        </figure>
      </div>
    </SectionTemplate>
  );
}
