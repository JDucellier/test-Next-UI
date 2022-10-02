import { Container } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../../Components/UI/Header";
import { randommizer } from "../../lib/randommizer";
import { COLORS, GRADIANTS } from "../../lib/constant";
import GitLogo from "../../Components/Icons/GitLogo";
import CodeDisplayer from "../../Components/CodeDisplayer";
import GithubLogo from "../../Components/Icons/GithubLogo";

const CheatSheet: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Introduction à Git</title>
        <meta
          name="description"
          content="Une introduction a git pour comprendre le focntionnement..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header
          textGradient={randommizer([...GRADIANTS])}
          logos={
            <>
              <GitLogo fill={randommizer([...COLORS, "currentColor"])} />
            </>
          }
          title={"Introduction à Git et ces bases"}
        />

        <Container css={{ minHeight: "200vh" }}>
          <CodeDisplayer />
        </Container>
      </main>
    </div>
  );
};

export default CheatSheet;
