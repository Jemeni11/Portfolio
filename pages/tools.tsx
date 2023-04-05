import Head from "next/head";

const Tools = () => {
  return (
    <>
      <Head>
        <meta name="description" content="The tools Emmanuel Jemeni uses" />
        <title>Tools | Emmanuel Jemeni</title>
      </Head>
      <div>
        <h1>Tools</h1>
        <p>
          OS: Ubuntu 20.04.5 LTS x86_64
          <br />
          Host: HP ENVY Notebook
          <br />
          Kernel: 5.15.0-60-generic
          <br />
          Packages: 2251 (dpkg), 33 (brew), 11 (snap)
          <br />
          Shell: bash 5.0.17
          <br />
          Resolution: 1366x768
          <br />
          DE: LXQt
          <br />
          WM: Openbox
          <br />
          WM Theme: Arc-Darker
          <br />
          Theme: Arc-Dark [GTK2/3]
          <br />
          Icons: ePapirus [GTK2/3]
          <br />
          CPU: Intel i5-7200U (4) @ 3.100GHz
          <br />
          GPU: Intel HD Graphics 620
          <br />
          Memory: 1239MiB / 7834MiB
        </p>
      </div>
    </>
  );
};

export default Tools;
