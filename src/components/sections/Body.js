import {
  Flex,
  Stack,
  Heading,
  Text,
  Box,
  Button,
  Image,
  Spacer,
  Badge,
  HStack
} from "@chakra-ui/react";
import React from "react";
import { GiPieChart, GiStabbedNote } from "react-icons/gi";
import { BsCart3 } from "react-icons/bs";
import Carnine from "../../images/background.svg";
import Feline from "../../images/Feline.svg";
import Coming from "../../images/coming.svg";
import Wave from "../../images/wave-haikei.svg";
import wave1 from "../../images/wave-haikei (1).svg";
import safe from "../../images/safe-open-5435761-4537116.webp";

const Body = () => {
  return (
    <div>
      <Flex
        align="center"
        justify={{ base: "center", md: "center", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="50vh"
        mb={16}
      >
        <Stack
          spacing={4}
          w={{ base: "80%", md: "40%", lg: "100%" }}
          align={["center", "center", "center", "center"]}
        >
          <Heading
            as="h3"
            size="xl"
            fontWeight={800}
            fontFamily="Montserrat"
            w="100%"
            fontSize="64px"
            lineHeight="77px"
            color="primary.00"
            textAlign={["center", "center", "center", "center"]}
          >
            The Kuppy System
          </Heading>
          <Text
            w={("none", "none", "30%", "40%")}
            fontFamily="Montserrat"
            display={["center", "center", "center", "center"]}
          >
            The Kuppy clans Ecosystem consists of our two Native Tokens-Conine
            Master and feline master
          </Text>
        </Stack>
      </Flex>
      <Stack direction={["column", "column", "row", "row"]}>
        <Box
          width={["100%", "100%", "50%", "50%"]}
          overflow="hidden"
          backgroundImage={Wave}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          pb="29px"
        >
          <Stack
            direction={["column", "column", "column", "column"]}
            alignItems={["center", "center", "center"]}
            spacing="18px"
          >
            <Image boxSize="300px" src={Carnine} />
            <Button
              width="150px"
              h="50px"
              align="center"
              bgGradient="linear(#3DBA41, #007B04)"
              textColor="white"
              fontFamily="Poppins"
              fontWeight="bold"
            >
              <BsCart3 color="white" />
              &nbsp; Buy Now
            </Button>
            <Button
              width="150px"
              h="50px"
              bgGradient="linear(#3DBA41, #007B04)"
              textColor="white"
              fontWeight="bold"
              fontFamily="Poppins"
            >
              <GiPieChart color="white" />
              &nbsp; chart
            </Button>
            <Button
              width="150px"
              h="50px"
              bgGradient="linear(#3DBA41, #007B04)"
              textColor="white"
              fontFamily="Poppins"
              fontWeight="bold"
            >
              <GiStabbedNote color="white" />
              &nbsp;contract
            </Button>
          </Stack>
          <Heading
            textColor="white"
            align="center"
            mt="20px"
            fontFamily="Poppins"
          >
            Tokenomics
          </Heading>
          <HStack spacing={8} ml={["60px", "120px", "120px", "220px"]}>
            <Image boxSize="100px" src={safe} />
            <Image boxSize="100px" src={safe} />
          </HStack>
          <HStack spacing={8} ml={["60px", "120px", "120px", "220px"]}>
            <Text fontFamily="Poppins" fontWeight="bold" textColor="white">
              10%{" "}
              <Badge bg="black" textColor="#FFC92E">
                {" "}
                team lock
              </Badge>
            </Text>
            <Text fontFamily="Poppins" fontWeight="bold" textColor="white">
              20%
              <Badge bg="black" textColor="#FFC92E">
                Staking rewards
              </Badge>
            </Text>
          </HStack>
          <HStack spacing={8} ml={["60px", "120px", "120px", "220px"]}>
            <Image boxSize="100px" src={safe} />
            <Image boxSize="100px" src={safe} />
          </HStack>
          <HStack spacing={8} ml={["60px", "120px", "120px", "220px"]}>
            <Text fontFamily="Poppins" fontWeight="bold" textColor="white">
              30%{" "}
              <Badge bg="black" textColor="#FFC92E">
                liquidity
              </Badge>
            </Text>
            <Text fontFamily="Poppins" fontWeight="bold" textColor="white">
              40%
              <Badge bg="black" textColor="#FFC92E">
                fair launch
              </Badge>
            </Text>
          </HStack>
        </Box>
        <Box
          width={["100%", "100%", "50%", "50%"]}
          backgroundImage={wave1}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <Stack
            direction={["column", "column", "column", "column"]}
            alignItems={(["center"], ["center"], ["center"])}
          >
            <Image boxSize="300px" src={Feline} />
            <Image mt={8} src={Coming} />
            <Text
              as="p"
              p={(["none"], ["none"], [16], [20])}
              textColor="#0B0B0B"
              fontFamily="Montserrat"
            >
              This is a strict Whitelist Presale Allocations for the Kuppy Clans
              Community, to whitelist for this Pre-Sale, we encourage you to
              stake 100,000 Canine Master $CM for 90 days. 10% of raised BUSDs
              would be used to Buy Back $CM.
            </Text>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
};
export default Body;
