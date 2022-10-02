import { Container, CSS } from "@nextui-org/react";
import { COLORS } from "../../lib/constant";
import CircleIcon from "../Icons/CircleIcon";
import { Box } from "./Box";

export const Layout: React.FC<{ children: JSX.Element; css?: CSS }> = ({
  children,
  css,
}) => (
  <Container
    css={{
      padding: "0rem",
      boxSizing: "border-box",
      maxW: "100%",
      border: "0.1rem solid $border",

      backgroundOpacity: 0.1,
      backdropFilter: "blur(20px)",
      borderRadius: "$md",
      overflow: "auto",
    }}
  >
    <Container
      css={{
        padding: "$6 $10",
        background: "$gray50",
        maxW: "100%",
      }}
    >
      <CircleIcon
        fill={"error"}
        width={14}
        height={14}
        styles={{ marginRight: "0.5rem" }}
      />
      <CircleIcon
        fill={"warning"}
        width={14}
        height={14}
        styles={{ marginRight: "0.5rem" }}
      />
      <CircleIcon
        fill={"success"}
        width={14}
        height={14}
        styles={{ marginRight: "0.5rem" }}
      />
    </Container>
    <Container
      css={{
        width: "100%",
        padding: "0",
        overflow: "auto",
        maxH: "150%",
        ...css,
      }}
    >
      {children}
    </Container>
  </Container>
);
