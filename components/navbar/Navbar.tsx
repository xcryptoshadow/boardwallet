import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import Button from "components/button/Button";
import TextField from "components/Input/TextField";
// import Stack from "components/stack/Stack";
import Loading from "components/UI/Loading";
import { ConnectKitButton } from "connectkit";
import { FC } from "react";
import { useAccount } from "wagmi";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import PeaceLogo from "components/PeaceLogo/PeaceLogo";
import menuItems from "utils/menuItems";
import { useRouter } from "next/router";
import List from "components/list/List";
import ListItem from "components/list/ListItem";
import ListItemIcon from "components/list/ListItemIcon";
import Section from "components/Section/Section";
import Image from "next/image";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link px={2} py={1} rounded={"md"} href={"#"}>
    {children}
  </Link>
);

const Navbar: FC = () => {
  const { address } = useAccount();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const renderComponent = () => {
    return (
      <Box
        bg={useColorModeValue("whiteAlpha.900", "whiteAlpha.900")}
        px={10}
        borderRadius={"0.5rem"}
        mb={10}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={20} alignItems={"right"}>
            <PeaceLogo></PeaceLogo>
            <HStack as={"nav"} display={{ base: "none", md: "flex" }}>
              {Object.entries(menuItems).map(
                ([, { title, icon, route, alt }], key) => {
                  return (
                    <ListItem
                      key={key}
                      // style={{ backgroundColor: "pink" }}
                    >
                      <Section onClick={() => router.push(route)}>
                        {/* Do not remove the onClick event. It is used to
                       propagate the parent's onClick event */}
                        {/* <ListItemIcon onClick={() => {}}>
                          <Image src={icon} alt={alt} width={20} height={20} />
                        </ListItemIcon> */}
                        {/* <span>{title}</span> */}
                        <NavLink key={title}>{title}</NavLink>
                      </Section>
                    </ListItem>
                  );
                }
              )}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <ConnectKitButton></ConnectKitButton>
            {/* <ConnectKitButton.Custom>
              {({ isConnecting, show, isConnected, truncatedAddress }) => {
                return (
                  <Button
                    onClick={show}
                    variant="gradientBorder"
                    size="sm"
                    style={{
                      border: "solid",
                      backgroundColor: "linear-gradient(to right, red, purple)",
                    }}
                  >
                    {isConnected ? (
                      truncatedAddress
                    ) : isConnecting ? (
                      <Loading />
                    ) : (
                      "Connect Wallet"
                    )}
                  </Button>
                );
              }}
            </ConnectKitButton.Custom> */}
          </Flex>
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
    );
  };

  return renderComponent();
};

export default Navbar;
