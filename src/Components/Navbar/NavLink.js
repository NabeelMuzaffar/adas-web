import { chakra } from "@chakra-ui/react";
import * as React from "react";
const DesktopNavLink = React.forwardRef((props, innerRef) => {
  const { active, ...rest } = props;
  return (
    <chakra.a
      ref={innerRef}
      display="inline-block"
      px="4"
      py="6"
      fontWeight="semibold"
      aria-current={active ? "page" : undefined}
      color={"#153A5B"}
      transition="all 0.2s"
      {...rest}
      _hover={{
        color: "gray.500",
      }}
      _active={{
        color: "blue.600",
      }}
      _activeLink={{
        color: "blue.600",
        fontWeight: "bold",
      }}
    />
  );
});
DesktopNavLink.displayName = "DesktopNavLink";

export const MobileNavLink = (props) => {
  const { active, ...rest } = props;
  return (
    <chakra.a
      color={"#153A5B"}
      aria-current={active ? "page" : undefined}
      w="full"
      display="flex"
      alignItems="center"
      height="14"
      fontWeight="semibold"
      borderBottomWidth="1px"
      {...rest}
    />
  );
};
export const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
};
