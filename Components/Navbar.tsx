import React from "react";
import {
  Navbar,
  Text,
  useTheme,
  Switch,
  Dropdown,
  Button,
  Link,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { useRouter } from "next/router";
import { SunIcon } from "./Icons/SunIcon";
import { MoonIcon } from "./Icons/MoonIcon";
import { icons } from "./Icons/basicsIcons";

const menu = [
  { label: "Notions de bases", pathname: "#", subMenu: undefined },
  {
    label: "Git & Github",
    pathname: undefined,
    subMenu: [
      {
        label: "C'est quoi le versionning ?",
        subtitle:
          "Petite intro sur le versionning et les 2 outils Git et Github.",
        pathname: "/git-github",
        icon: icons.scale,
      },
      {
        label: "Explication de Git",
        subtitle: "Cours basics pour bien comprendre le fonctionnement de Git.",
        pathname: "/git-github/git",
        icon: icons.activity,
      },
      {
        label: "Tricks & tips Github !",
        subtitle:
          "On rentre un peu plus en profondeur dans git avec quelques trucs et astuces.",
        pathname: "/git-github/tricks-and-tips-github",
        icon: icons.server,
      },
      {
        label: "LA Cheatsheet!",
        subtitle:
          "Un cheat sheet avec toutes les commandes les plus utilisées en temps que dev !",
        pathname: "/git-github/cheatheet",
        icon: icons.flash,
      },
    ],
  },
  { label: "Le bash", pathname: "#", subMenu: undefined },
  { label: "Html et css", pathname: "#", subMenu: undefined },
  { label: "JS & Typescript", pathname: "#", subMenu: undefined },
];
const NavbarComponent = () => {
  const router = useRouter();
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Navbar isBordered={isDark} shouldHideOnScroll variant="sticky">
      <Navbar.Brand
        onClick={() => {
          router.push({
            pathname: "/",
          });
        }}
      >
        <Text b color="inherit" hideIn="xs">
          BaldurZz
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor={"primary"}
        hideIn="xs"
        variant={"default"}
      >
        {menu.map((item, index) => {
          if (!!item.subMenu && item.subMenu.length > 0) {
            return (
              <Dropdown isBordered key={index}>
                <Navbar.Item>
                  <Dropdown.Button
                    auto
                    light
                    css={{
                      px: 0,
                      dflex: "center",
                      svg: { pe: "none" },
                    }}
                    iconRight={icons.chevron}
                    ripple={false}
                  >
                    {item.label}
                  </Dropdown.Button>
                </Navbar.Item>
                <Dropdown.Menu
                  aria-label="ACME features"
                  css={{
                    $$dropdownMenuWidth: "340px",
                    $$dropdownItemHeight: "70px",
                    "& .nextui-dropdown-item": {
                      py: "$4",
                      // dropdown item left icon
                      svg: {
                        color: "$secondary",
                        mr: "$4",
                      },
                      // dropdown item title
                      "& .nextui-dropdown-item-content": {
                        w: "100%",
                        fontWeight: "$semibold",
                      },
                    },
                  }}
                >
                  {item.subMenu.map((subItem, index) => {
                    return (
                      <Dropdown.Item
                        key={index}
                        showFullDescription
                        description={subItem.subtitle}
                        icon={subItem.icon}
                        onClick={() => {
                          router.push({
                            pathname: subItem.pathname,
                          });
                        }}
                      >
                        <Navbar.Link
                          isActive={router.pathname === subItem.pathname}
                          href={subItem.pathname}
                        >
                          {subItem.label}
                        </Navbar.Link>
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            );
          } else {
            return (
              <Navbar.Link
                isActive={router.pathname === item.pathname}
                href={item.pathname}
              >
                {item.label}
              </Navbar.Link>
            );
          }
        })}

        <Navbar.Link isActive={router.pathname === "/"} href={"/"}>
          Home
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Switch
            checked={isDark}
            iconOn={<SunIcon filled />}
            iconOff={<MoonIcon filled />}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.Item>
        {/*  <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} color={"primary"} href="#">
            Sign Up
          </Button>
        </Navbar.Item> */}
      </Navbar.Content>
    </Navbar>
  );
};

export default NavbarComponent;
