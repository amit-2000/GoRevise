import React, { useState } from "react";
import { Box, Button, HStack, Text, Stack } from "@chakra-ui/react";
import { BiUndo, BiRedo, BiPencil, BiReset, BiCheck } from "react-icons/bi";
import "./highlight.css";

function Highlight() {
  const [para] = useState(
    "Many novice writers tend to make a sharp distinction between content and style, thinking that a paper can be strong in one and weak in the other, but focusing on organization shows how content and style converge in deliberative academic writing. Your professors will view even the most elegant prose as rambling and tedious if there isn’t a careful, coherent argument to give the text meaning. Paragraphs are the “stuff ” of academic writing and, thus, worth our attention here."
  );
  let [index_array, set_Index_array] = useState([]);
  const [removed_word_array, set_Removed_word_array] = useState([]);

  const handlePush = () => {
    // debugger;
    const str = document.getSelection();
    // console.log(str.focusNode.parentNode.id);
    // console.log(str.toString());
    const range = str.getRangeAt(0); // index of selected string
    // console.log(range);

    const start = range.startOffset; // starting Index
    const end = start + str.toString().trim().length; // ending index

    // console.log("old ", start, end);

    const TextContent = str.focusNode.nodeValue;
    // console.log(TextContent);

    const pre = TextContent.substring(0, start); // pre content
    const post = TextContent.substring(end); // post content
    const rm_word = str.toString().trim(); // removed word
    const removed_word_list = [...removed_word_array, rm_word]; // removed word

    set_Removed_word_array(removed_word_list); // setting new removed array
    const new_target_id = new Date().valueOf() + "a"; // ID only for selected text.

    const updated_target_ID = [...index_array, new_target_id];
    set_Index_array(updated_target_ID); // Array of Index

    document.getElementById(
      str.focusNode.parentNode.id
    ).innerHTML = `<span  id=${new Date().valueOf() + 1} >${pre}</span>
    <span  id=${new_target_id} class="selected__text__hl" >${rm_word}</span>
    <span id=${new Date().valueOf() + 3}>${post}</span>`;
  };
  // console.log("Index array ", index_array);
  // console.log("removed word array ", removed_word_array);

  const handleReplace = () => {
    index_array.map((id, idx) => {
      return (document.getElementById(id).innerHTML = `<input id=${
        id + "b"
      }></input>`);
    });
  };

  const handleSubmit = () => {
    const ans_array = [];
    index_array.map((id, idx) => {
      let val = document.getElementById(id + "b").value;
      return ans_array.push({ val, id });
    });
    // console.log(ans_array);
    index_array.map((id, idx) => {
      if (removed_word_array[idx] === ans_array[idx].val) {
        return (document.getElementById(
          id
        ).innerHTML = `<span class="correct">${ans_array[idx].val}</span>`);
      } else {
        return (document.getElementById(
          id
        ).innerHTML = `<span class="wrong">${ans_array[idx].val}</span>`);
      }
    });
  };

  return (
    <Box bg={"white"} m={20} rounded={"2xl"}>
      <HStack
        bg="black"
        color="white"
        px={"96"}
        justifyContent={"space-around"}
        alignItems={"center"}
        roundedTop={"2xl"}
        py={5}
      >
        <Box>
          <BiUndo fontSize={"30px"} color={"cyan"} />
          <Text>Undo</Text>
        </Box>
        <Box>
          <BiRedo fontSize={"30px"} color={"cyan"} />
          <Text>Redo</Text>
        </Box>
        <Box>
          <BiPencil fontSize={"30px"} color={"cyan"} />
          <Text>Highlight</Text>
        </Box>
        <Box>
          <BiReset fontSize={"30px"} color={"cyan"} />
          <Text>Restart</Text>
        </Box>
        <Box>
          <BiCheck fontSize={"30px"} color={"cyan"} />
          <Text>Done</Text>
        </Box>
      </HStack>
      <Stack p={10}>
        <Text id="new_para" as={"p"} fontSize={"lg"}>
          {para}
        </Text>
        <Box p={5}>
          <Button mx={5} onClick={handlePush}>
            Highlight
          </Button>
          <Button mx={5} onClick={handleReplace}>
            Done
          </Button>
          <Button mx={5} onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default Highlight;
