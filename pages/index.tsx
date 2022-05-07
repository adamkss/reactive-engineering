import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reactive Engineering | Home</title>
        <meta name="description" content="Reactive Engineering's Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Reactive Engineering</h1>
        <a href="mailto:adam@reactive.engineering">adam@reactive.engineering</a>
      </main>
    </div>
  );
};

export default Home;
