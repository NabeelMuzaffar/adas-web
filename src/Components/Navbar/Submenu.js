import { useNavMenu } from "./useNavMenu";
import { Box, Collapse, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import * as React from "react";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "./NavLink";
import { NavMenu } from "./NavMenu";
import { SubmenuItem as DesktopMenuItem } from "./SubmenuItem";
import { Link as ReachLink } from "react-router-dom";

const DesktopSubmenu = (props) => {
  const { link } = props;
  const { isOpen, getMenuProps, getTriggerProps } = useNavMenu();
  return (
    <>
      <NavLink.Desktop
        display="flex"
        alignItems="center"
        as="button"
        type="button"
        px="4"
        fontWeight="semibold"
        {...getTriggerProps()}
      >
        <Box color="rgb(21, 58, 91);"> {link.label}</Box>
        <Box marginStart="2" as={FaChevronDown} fontSize="xs" />
      </NavLink.Desktop>

      <NavMenu {...getMenuProps()} animate={isOpen ? "open" : "closed"}>
        <Box maxW="7xl" mx="auto" px="8">
          <SimpleGrid spacing="10" columns={2}>
            {link.children?.map((item, idx) => (
              <ReachLink>
                <DesktopMenuItem
                  key={idx}
                  title={item.label}
                  to={item.href}
                  icon={item.icon}
                >
                  {item.description}
                </DesktopMenuItem>
              </ReachLink>
            ))}
          </SimpleGrid>
        </Box>
      </NavMenu>
    </>
  );
};

const MobileSubMenu = (props) => {
  const { link } = props;
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <NavLink.Mobile
        as="button"
        textAlign="start"
        type="button"
        cursor="pointer"
        onClick={onToggle}
        paddingEnd="4"
      >
        <Box flex="1">{link.label}</Box>
        <Box
          as={FaChevronDown}
          transform={`rotate(${isOpen ? "180deg" : "0deg"})`}
        />
      </NavLink.Mobile>
      <Collapse in={isOpen}>
        <Box pl="5">
          {link.children?.map((item, idx) => (
            <ReachLink to={item.href}>
              <NavLink.Mobile key={item.id}>{item.label}</NavLink.Mobile>
            </ReachLink>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export const Submenu = {
  Mobile: MobileSubMenu,
  Desktop: DesktopSubmenu,
};
