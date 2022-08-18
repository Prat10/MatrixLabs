import React from "react";
import { Stack } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Logo from "../ui/Logo";

const CloseIcon = () => <AiOutlineClose size={30} />;
const MenuIcon = () => <FiMenu size={30} />;
const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);
  return (
    <Flex
      as="nav"
      align="center"
      shadow="2xl"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={5}
      bgColor={["#000000", "#000000", "#000000", "#000000"]}
      color={["white", "white", "white", "white"]}
    >
      <Flex align="center">
        <Logo />
        <Text
          color="white"
          fontWeight="bold"
          fontFamily="Oswald"
          fontSize={["sm", "md", "2xl", "2xl"]}
        >
          MATRIX LABS
        </Text>
      </Flex>
      <Button
        display={["inline", "inline", "none", "none"]}
        rounded="25px"
        mr="2px"
        fontWeight="bold"
        fontFamily="Oswald"
        color="white"
        bg={["green", "green", "green", "green"]}
        _hover={{
          bg: ["green", "green.800", "green.500", "green.400"]
        }}
      >
        CONNECT
      </Button>
      <Box display={{ base: "inline", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["space-between", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
        >
          <Stack spacing={12} direction={["column", "column", "row", "row"]}>
            <Text fontWeight="bold" fontSize="2xl" fontFamily="Oswald">
              Home
            </Text>
            <Text fontWeight="bold" fontSize="2xl" fontFamily="Oswald">
              About
            </Text>
            <Text fontWeight="bold" fontSize="2xl" fontFamily="Oswald">
              WhitePaper
            </Text>
            <Text fontWeight="bold" fontSize="2xl" fontFamily="Oswald">
              Audit
            </Text>
            <Text fontWeight="bold" fontSize="2xl" fontFamily="Oswald">
              Telegram
            </Text>
            <Button
              size={(["sm"], ["lg"], ["md"], ["md"])}
              display={["none", "none", "inline", "inline"]}
              rounded="55px"
              fontFamily="Oswald"
              fontWeight="bold"
              height={10}
              width={120}
              color={["primary.300", "primary.500", "white", "white"]}
              bg={["black", "white", "green", "green"]}
              _hover={{
                bg: ["green", "green.800", "green.500", "green.400"]
              }}
            >
              CONNECT
            </Button>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Header;
