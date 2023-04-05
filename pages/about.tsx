import Head from "next/head";
import styles from "@/styles/About.module.css";

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
      <div className={styles.aboutPageContainer}>
        <section>
          <p>yo</p>
          <h1>I'm Emmanuel !</h1>
        </section>
      </div>
    </>
  );
};

export default About;
