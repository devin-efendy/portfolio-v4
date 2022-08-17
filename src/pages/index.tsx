import { Center, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { About, WorkExperience } from "../components";

const Home: NextPage = () => {
  return (
    <div className={"container"}>
      <Head>
        <title>Devin Efendy</title>
        <meta name="description" content="Devin Efendy Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"main"}>
        <About />
        {/* <WorkExperience /> */}
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
