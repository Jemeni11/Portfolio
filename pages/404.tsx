import Head from "next/head";
import Lottie from "lottie-react";
import NotFound404 from "@/animations/404.json";

const Error404Page = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="You have entered a place only rumored to exist: Page 404!"
        />
        <title>Error | Emmanuel Jemeni</title>
      </Head>
      <div>
        <h1>Error !</h1>
        <Lottie
          animationData={NotFound404}
          loop={true}
          style={{
            maxWidth: "80%",
            marginLeft: "10%",
            marginRight: "10%",
            height: "90vh",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
};

export default Error404Page;
