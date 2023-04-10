import SectionTemplate from "../SectionTemplate";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useRouter } from "next/router";

export default function AboutSection() {
  const router = useRouter();
  return (
    <SectionTemplate sectionTitle="About Me">
      <div className="mb-4 flex w-[85%] gap-8">
        <div className="flex-1 flex border-0">
          <h4 className="text-[2rem] text-[#b5b5b5] text-center justify-center">
            A parselmouth in my spare time
            <br />
            •
            <br />
            Always coding in Py & Js
            <br />
            •
            <br />
            Currently learning NextJS
          </h4>
        </div>
        <div className="flex-[2_2_0%]">
          {/* <h3 className="text-5xl text-[#b5b5b5]">Emmanuel Chinonso Jemeni</h3> */}
          <p className="pt-4 text-[2rem]">
            I'm a front-end web developer with more than a year of personal
            experience developing applications for the web. I also refer to
            myself as a "ReactJS Developer" because ReactJS is my major tool for
            front-end development. I also use ReactJS in mobile app development
            with the help of tools like React Native and Expo, but the web is my
            main focus. I am proficient enough with Python as well, but I only
            use it for scripting and web scraping.
          </p>
        </div>
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
