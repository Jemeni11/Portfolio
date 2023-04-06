import Head from "next/head";
import Quote from "@/components/Quote";
import KaushanScriptText from "@/components/KaushanScriptText";

const About = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="The about me page of Emmanuel Jemeni's website"
        />
        <title>About | Emmanuel Jemeni</title>
      </Head>
      <div className="w-full flex flex-col min-h-screen">
        <section className="w-full min-h-[85vh] flex flex-col justify-center items-center gap-y-2">
          <p className=" font-bold text-[10rem] text-white/[.725]">
            <KaushanScriptText text="Hi There" />
          </p>
        </section>
        <section>
          <Quote
            cite_link="https://me.me/i/jesus-apolinaris-we-are-not-strangers-only-the-introduction-is-quote-8c1ebf3c825643b5b6160e655063c961"
            quote="We are not strangers, only the introduction is missing."
            author="Jesus Apolinaris"
          />
        </section>
        <section>
          <h1>I'm Emmanuel Chinonso Jemeni</h1>
          <KaushanScriptText text="Pronunciation: ih-MAH-nyu-wuhl CHEE-none-so GEM-many" />
        </section>
      </div>
    </>
  );
};

export default About;
