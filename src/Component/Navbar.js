import React from "react";
import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Navbar({ color }) {
  return (
    <Center>
      <Box bg={color} m={10} w={"70rem"} borderRadius={"25px"}>
        <Flex
          justifyContent={"space-around"}
          alignItems={"center"}
          height={"50px"}
        >
          <Flex>
            <Heading color={"black"}>
              Go
              <Text as={"span"} color={"teal.300"}>
                Revise
              </Text>
            </Heading>
          </Flex>
          <Flex
            w={"200px"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button size={"xl"} p={2}>
              <Link to="/">Home</Link>
            </Button>
            <Button size={"xl"} p={2}>
              <Link to="/contact">Contact</Link>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
}

export default Navbar;
