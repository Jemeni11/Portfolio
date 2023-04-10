import { useRouter } from "next/router";
import SectionTemplate from "../SectionTemplate";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

export default function ProjectsSection() {
  const router = useRouter();
  return (
    <SectionTemplate sectionTitle="Featured Project">
      <div className="flex w-[85%] gap-4 h-[calc(100vh_-_9rem)] items-center">
        <div className="flex-[2_2_0%]">
          <video
            autoPlay
            loop
            muted
            poster="./react-redux.png"
            style={{ width: "100%", height: "max-height" }}
          >
            <source src="./react-redux.mp4" type="video/mp4" />
            <p>
              Your browser doesn't support HTML video. Here is a
              <a href="./react-redux.mp4">link to the video</a> instead.
            </p>
          </video>
        </div>
        <div className="flex-1 flex flex-col gap-y-8">
          <h4 className="font-bold text-white/[.725] text-5xl">
            E-commerce store
          </h4>
          <p>
            This is an e-commerce store built with ReactJS, Redux, and a copy of
            the FakeStoreAPI data saved on a Firebase database. It is a fully
            functional e-commerce store with features like, cart, checkout, and
            payment.
          </p>
          <div className="flex gap-4">
            <PrimaryButton
              title="Read More About This Project"
              // TODO: Change this to the actual project page
              onClick={() => router.push("/projects/red")}
              buttonClass="hover:bg-white hover:text-black"
            />
            <PrimaryButton
              title="Look at all my projects"
              onClick={() => router.push("/projects/")}
              buttonClass="hover:bg-white hover:text-black"
            />
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
}
