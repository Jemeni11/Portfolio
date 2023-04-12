import Head from "next/head";
import Quote from "@/components/Quote";
import KaushanScriptClassName from "@/components/FontsClassNames/KaushanScriptClassName";
import FirstPageSection from "@/components/FirstPageSection";

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
        <FirstPageSection text="About Me" />
        <section>
          <Quote
            cite_link="https://me.me/i/jesus-apolinaris-we-are-not-strangers-only-the-introduction-is-quote-8c1ebf3c825643b5b6160e655063c961"
            quote="We are not strangers, only the introduction is missing."
            author="Jesus Apolinaris"
          />
        </section>
        <section>
          <h1>I'm Emmanuel Chinonso Jemeni</h1>
          <span
            className={KaushanScriptClassName}
            children="Pronunciation: ih-MAH-nyu-wuhl CHEE-none-so GEM-many"
          />
        </section>
      </div>
    </>
  );
};

export default About;
