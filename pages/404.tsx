import Head from "next/head";

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
      </div>
    </>
  );
};

export default Error404Page;
