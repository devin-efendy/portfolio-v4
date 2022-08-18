import type { NextPage } from "next";
import Head from "next/head";
import { About, WorkExperience } from "../components";
import experienceData from "../../data/experience";
import { IExperience } from "../types";
import Education from "../components/section/Education";

export async function getStaticProps() {
  return {
    props: {
      experience: experienceData,
    },
  };
}

interface Props {
  experience: Array<IExperience>;
}

const Home: NextPage<Props> = ({ experience }) => {
  return (
    <div className={"container"}>
      <Head>
        <title>Devin Efendy</title>
        <meta name="description" content="Devin Efendy Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"main"}>
        <About />
        <Education />
        <WorkExperience experience={experience} />
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
