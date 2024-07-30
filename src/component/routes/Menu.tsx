import { Card, CardBody, Link } from "@nextui-org/react";
import { Link as LinkRouter } from "react-router-dom";

const Menu = () => {
  return (
    <Card
      isBlurred
      className="border-none p-3 bg-background/60 dark:bg-default-100/50 w-[310px]"
    >
      <CardBody className="flex md:gap-0 gap-y-6 py-6 flex-col justify-center items-center">
        <LinkRouter to={"/game"}>
          <Link as={"div"} className="p-3 px-16" isBlock color="foreground">
            Start a game
          </Link>
        </LinkRouter>
        <LinkRouter to={"/profile"}>
          <Link as={"div"} className="p-3 px-16" isBlock color="foreground">
            Profile
          </Link>
        </LinkRouter>
      </CardBody>
    </Card>
  );
};

export default Menu;
