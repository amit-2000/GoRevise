import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineCreate } from "react-icons/md";
import Navbar from "./Navbar";

const Save = ({ handleSave }) => {
  return (
    <>
      <Navbar color="gray.200" />
      <Center pt="24" mt={"-60px"}>
        <Flex
          h={"380px"}
          w={"350px"}
          bg={"gray.100"}
          flexDir={"column"}
          justifyContent={"space-around"}
          alignItems={"center"}
          rounded={"3xl"}
        >
          <Box textAlign={"center"}>
            <Heading>Save</Heading>
            <Text mt={7} fontSize={"xl"}>
              Save your fill-in quiz test as a pdf document
            </Text>
           
          </Box>
          <Box mt={-5}>
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
              <Text>Save</Text>
            </Button>
          </Box>
        </Flex>
        <Flex
          h={"380px"}
          w={"350px"}
          bg={"gray.100"}
          flexDir={"column"}
          justifyContent={"space-around"}
          alignItems={"center"}
          rounded={"3xl"}
          marginLeft="20px"
        >
          <Box textAlign={"center"}>
            <Heading>Take the Quiz</Heading>
            <Text mt={7} fontSize={"xl"}>
              Challenge yourself and take the quiz
            </Text>
            <Text mt={7} fontSize={"xl"}>
              We will be rooting for you.
            </Text>
          </Box>
          <Box mt={-5}>
            <Button
              rounded={"full"}
              size={"lg"}
              mt={"auto"}
              px={6}
              bg={"cyan.400"}
              _hover={{ bg: "cyan.500" }}
              _focus={{ border: "none" }}
              onClick={() => handleSave(false)}
            >
              <MdOutlineCreate fontSize={"24px"} />
              <Text>Quiz</Text>
            </Button>
          </Box>
        </Flex>
      </Center>
    </>
  );
};
export default Save;
