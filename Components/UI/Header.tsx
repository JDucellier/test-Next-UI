import React from "react";
import { Container, CSS, keyframes, Text } from "@nextui-org/react";
import Classes from "../../types/classes";
import { GRADIANTS } from "../../lib/constant";

const classes: Classes = {
  root: {
    minHeight: `100vh`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    paddingBottom: "4rem",
    minWidth: "100%",
    backdropFilter: "blur(20px)",
    backgroundColor: "rgba($gray50, $gray50, $gray50, 0.5)",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    flexWrap: "wrap",
    maxW: "80%",
  },
};

const Header: React.FC<{
  textGradient?: string;
  logos?: JSX.Element;
  title: string;
  overrideStyles?: {
    root?: CSS;
    logoContainer?: CSS;
    title?: CSS;
  };
}> = ({ logos, title, overrideStyles, textGradient }) => {
  return (
    <Container css={overrideStyles?.root ? overrideStyles?.root : classes.root}>
      <Container
        css={
          overrideStyles?.logoContainer
            ? overrideStyles?.logoContainer
            : {
                ...classes.logoContainer,
              }
        }
      >
        {logos}
      </Container>

      <Text
        h1
        size={"$7xl"}
        css={
          overrideStyles?.title
            ? overrideStyles?.title
            : {
                ...classes.title,
                textGradient: textGradient ? textGradient : GRADIANTS[1],
              }
        }
        weight="bold"
      >
        {title}
      </Text>
    </Container>
  );
};

export default Header;
