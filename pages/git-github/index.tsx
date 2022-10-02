import { Container } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../../Components/UI/Header";
import { randommizer } from "../../lib/randommizer";
import { COLORS, GRADIANTS } from "../../lib/constant";
import GitLogo from "../../Components/Icons/GitLogo";
import CodeDisplayer from "../../Components/CodeDisplayer";
import GithubLogo from "../../Components/Icons/GithubLogo";

const GitGihub: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header
          textGradient={randommizer([...GRADIANTS])}
          logos={
            <>
              <GithubLogo fill={randommizer([...COLORS, "currentColor"])} />
              <GitLogo fill={randommizer([...COLORS, "currentColor"])} />
            </>
          }
          title={
            "Git et Github, outils indispensables en temps que développeur"
          }
        />

        <Container css={{ minHeight: "200vh" }}>
          <CodeDisplayer />
        </Container>
      </main>
    </div>
  );
};

export default GitGihub;
