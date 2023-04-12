import SectionTemplate from "../SectionTemplate";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useRouter } from "next/router";

export default function AboutSection() {
  const router = useRouter();
  return (
    <SectionTemplate sectionTitle="About Me">
      <div className="mb-4 flex w-[85%] gap-8">
        <p className="pt-4 text-[2.5rem] text-center">
          I'm a front-end web developer with more than a year of personal
          experience developing applications for the web. I also refer to myself
          as a "ReactJS Developer" because ReactJS is my major tool for
          front-end development. I also use ReactJS in mobile app development
          with the help of tools like React Native and Expo, but the web is my
          main focus. I am proficient enough with Python as well, but I only use
          it for scripting and web scraping.
        </p>
      </div>
      <PrimaryButton
        title="Read more"
        animated={false}
        buttonClass="hover:bg-white hover:text-black"
        onClick={() => router.push("/about")}
      />
    </SectionTemplate>
  );
}
