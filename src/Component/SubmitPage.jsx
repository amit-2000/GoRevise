import React from "react";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
const SubmitPage = ({ editText, handleSubmit }) => {
  return (
    <div>
      <HStack
        my={5}
        bg="black"
        color="white"
        px={"8"}
        justifyContent={"right"}
        alignItems={"center"}
        roundedTop={"2xl"}
        py={1}
        textAlign="center"
      >
        <Box mx={5} onClick={handleSubmit}>
          <Button
            color={"cyan"}
            backgroundColor={"black"}
            _hover={"black"}
            _focus={{ border: "none" }}
            variant={"unstyled"}
          >
            <BiCheck fontSize={"30px"} color={"cyan"} />
          </Button>
          <Text className="textshift">view score</Text>
        </Box>
        <Box mx={5}>
          <Button
            color={"cyan"}
            backgroundColor={"black"}
            _hover={"black"}
            _focus={{ border: "none" }}
            variant={"unstyled"}
          >
            <BiCheck fontSize={"30px"} color={"cyan"} />
          </Button>
          <Text className="textshift">Go back</Text>
        </Box>
        <Link to="/">
          <Box mx={5} onClick={(e) => editText(e, "")}>
            <Button
              color={"cyan"}
              backgroundColor={"black"}
              _hover={"black"}
              _focus={{ border: "none" }}
              variant={"unstyled"}
            >
              <BiCheck fontSize={"30px"} color={"cyan"} />
            </Button>
            <Text className="textshift">Done</Text>
          </Box>
        </Link>
      </HStack>
    </div>
  );
};

export default SubmitPage;
