import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineCreate } from "react-icons/md";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Create() {
  return (
    <>
      <Navbar color="gray.200" />
      <Center pt="24">
        <Flex
          h={"sm"}
          w={"sm"}
          bg={"gray.100"}
          flexDir={"column"}
          justifyContent={"space-around"}
          alignItems={"center"}
          rounded={"xl"}
        >
          <Box textAlign={"center"}>
            <Heading>Create</Heading>
            <Text mt={10} fontSize={"xl"}>
              Create a fill-in quiz from scratch.
            </Text>
          </Box>
          <Box>
            <Button
              rounded={"full"}
              size={"lg"}
              mt={"auto"}
              px={6}
              bg={"cyan.400"}
              _hover={{ bg: "cyan.500" }}
              _focus={{ border: "none" }}
            >
              <MdOutlineCreate fontSize={"24px"} />
              <Link to="/highlight">Create</Link>
            </Button>
          </Box>
        </Flex>
      </Center>
    </>
  );
}

export default Create;
