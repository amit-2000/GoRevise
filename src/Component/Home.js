import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar color="gray.100" />

      <Container
        maxW={"7xl"}
        mt={-2}
        minH={{ base: "50vh", sm: "70vh", lg: "70vh" }}
        px={{ base: 2, sm: 5, lg: 12 }}
      >
        <Stack
          bg="rgb(230,255,255)"
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          p={10}
          py={{ base: 5, md: 10 }}
          direction={{ base: "column", md: "row" }}
          borderRadius={"20px"}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.4}
              fontWeight={700}
              fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
            >
              <Text as={"span"} position={"relative"}>
                A simple tool to help
              </Text>
              <br />
              <Text as={"span"}>you revise 😎</Text>
            </Heading>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Link to="/create">
                <Button
                  rounded={"full"}
                  size={"lg"}
                  px={7}
                  bg={"cyan.400"}
                  _hover={{ bg: "cyan.500" }}
                  _focus={{ border: "none" }}
                  fontWeight={700}
                  fontSize={{ base: "lg", sm: "lg", lg: "2xl" }}
                >
                  Get Started
                </Button>
              </Link>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <IconButton
                aria-label={"Play Button"}
                variant={"ghost"}
                _hover={{ bg: "transparent" }}
                size={"lg"}
                color={"white"}
                position={"absolute"}
                left={"50%"}
                top={"50%"}
                transform={"translateX(-50%) translateY(-50%)"}
              />
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://images.unsplash.com/photo-1644620990884-0e6e8743f71a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>

      <Container
        maxW={"7xl"}
        mt={4}
        minH={{ base: "57vh", sm: "60vh", lg: "80vh" }}
        px={{ base: 5, sm: 5, lg: 12 }}
      >
        <Stack
          bg="rgb(255,230,195)"
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          p={10}
          direction={{ base: "column", md: "row" }}
          borderRadius={"20px"}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={700}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            >
              <Text as={"span"} position={"relative"}>
                How to use? 🤔
              </Text>
            </Heading>
            <Box
              lineHeight={1.4}
              fontWeight={700}
              fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
            >
              <Text as={"p"} position={"relative"}>
                step 1: Click on{" "}
                <Text as={"span"} color={"cyan.600"}>
                  Get Started
                </Text>
              </Text>
              <Text as={"p"} position={"relative"}>
                step 2: Create your quiz by typing in the text box or pasting
                text directly
              </Text>
              <Text as={"p"} position={"relative"}>
                step 3: Select and Highlight the text to create a fill-in
              </Text>
              <Text as={"p"} position={"relative"}>
                step 4: Take the test! ✨ Good Luck✨
              </Text>

              <br />
              <Heading
                lineHeight={1.1}
                fontWeight={700}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text as={"span"} position={"relative"}>
                  It's That Simple!
                </Text>
              </Heading>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
