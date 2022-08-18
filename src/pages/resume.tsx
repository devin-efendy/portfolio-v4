import type { NextPage } from "next";
import Head from "next/head";
import { WorkExperience } from "../components";
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
        <title>Devin Efendy - Resume</title>
        <meta name="description" content="Devin Efendy Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"main"}>
        <Education />
        <WorkExperience experience={experience} />
      </main>
    </div>
  );
};

export default Home;
