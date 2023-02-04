import React from "react";
import { Box, Center, Flex, Heading, Text, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar({ color }) {
  return (
    <Center>
      <Box
        bg={color}
        m={10}
        mt={5}
        w={"120%"}
        borderRadius={"25px"}
        py="2"
        mx={{ base: 2, sm: 2, lg: 12 }}
        boxShadow="md"
      >
        <Flex
          justifyContent="space-around"
          alignItems={"center"}
          height={"50px"}
          ml={{ base: 0, sm: "30px", lg: "100px" }}
        >
          <Link to="/">
            <chakra.a>
              <Heading color={"black"}>
                Go
                <Text as={"span"} color={"teal.300"}>
                  Revise
                </Text>
              </Heading>
            </chakra.a>
          </Link>
          <Flex
            w={{ base: "140px", sm: "150px", lg: "150px" }}
            justifyContent={{
              base: "space-around",
              sm: "space-between",
              lg: "space-between",
            }}
            alignItems={"center"}
            fontSize={"lg"}
            mr={{ base: 0, sm: "30px", lg: "100px" }}
          >
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
}

export default Navbar;
