import React from "react";
import { Link as LinkRouter } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      title: "Play",
      href: "/game",
    },
    {
      title: "Profile",
      href: "/profile",
    },
    {
      title: "Login",
      href: "/login",
    },
    {
      title: "Sign up",
      href: "/signup",
    },
    {
      title: "Settings",
      href: "/settings",
    },
    {
      title: "Log Out",
      href: "/logout",
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <LinkRouter to={"/"}>
            <p className="text-inherit">
              Poker <span className="font-bold text-secondary-500">App</span>
            </p>
          </LinkRouter>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <LinkRouter to={"/game"}>
            <Link color="foreground" as={"div"}>
              Play
            </Link>
          </LinkRouter>
        </NavbarItem>
        <NavbarItem>
          <LinkRouter to={"/profile"}>
            <Link as={"div"} color="foreground">
              Profile
            </Link>
          </LinkRouter>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <LinkRouter to={item.href}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                as={"div"}
                size="lg"
              >
                {item.title}
              </Link>
            </LinkRouter>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
