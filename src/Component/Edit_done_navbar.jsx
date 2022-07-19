import React from "react";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { BiUndo, BiCheck } from "react-icons/bi";
const Edit_done_navbar = ({ editText, inputText, handleDone }) => {
  return (
    <div>
      <HStack
        my={5}
        bg="black"
        color="white"
        // px={"96"}
        justifyContent={"center"}
        alignItems={"center"}
        roundedTop={"2xl"}
        py={1}
        textAlign="center"
      >
        <Box mx={5} style={{ marginRight: "10px" }}>
          <Button
            color={"cyan"}
            backgroundColor={"black"}
            _hover={"black"}
            _focus={{ border: "none" }}
            variant={"unstyled"}
            onClick={(e) => editText(e, inputText)}
          >
            <BiUndo fontSize={"30px"} color={"cyan"} />
          </Button>
          <Text className="textshift">Edit</Text>
        </Box>

        {/* <Box mx={5} onClick={highlight} style={{ marginRight: "10px" }}>
                  <Button
                    color={"cyan"}
                    backgroundColor={"black"}
                    _hover={"black"}
                    _focus={{ border: "none" }}
                    variant={"unstyled"}
                  >
                    <BiPencil fontSize={"30px"} color={"cyan"} />
                  </Button>
                  <Text className="textshift">Highlight</Text>
                </Box> */}
        <Box mx={5} onClick={handleDone}>
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
      </HStack>
    </div>
  );
};

export default Edit_done_navbar;
