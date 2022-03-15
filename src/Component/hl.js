import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

function Highlight() {
  const [para, setPara] = useState(
    "In, concat() is a string method that is used to concatenate strings together. The concat() method appends one or more string values to the calling string and then returns the concatenated result as a new string. Because the concat way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers."
  );
  let [index_array, set_Index_array] = useState([]);
  const [removed_word_array, set_Removed_word_array] = useState([]);

  const handlePush = () => {
    // debugger;
    const str = document.getSelection();
    console.log(str);
    console.log(str.focusNode.parentNode.id);
    console.log(str.toString());
    const range = str.getRangeAt(0); // index of selected string
    // console.log(range);

    const start = range.startOffset; // starting Index
    const end = start + str.toString().trim().length; // ending index
    // const newEnd = start + str.toString().trim().length;
    const updated_index_array = [...index_array, start];
    set_Index_array(updated_index_array); // Array of Index

    console.log("old ", start, end);
    // console.log(para);
    const removedWord = { start, word: para.substring(start, end).trim() };
    set_Removed_word_array([...removed_word_array, removedWord]); // array of removed words

    const TextContent = str.focusNode.nodeValue;
    console.log(TextContent);

    const pre = TextContent.substring(0, start);
    const post = TextContent.substring(end);
    const rm_word = str.toString().trim();
    // console.log(pre.props, post);
    // setPara(pre + rm_word + post);
    let i = 0;
    document.getElementById(
      str.focusNode.parentNode.id
    ).innerHTML = `<span  id=${
      i + 1
    }  style="background-color:yellow;">${pre}</span><span  id=${
      i + 2
    } style="background-color:red;">${rm_word}</span><span style="background-color:green;" id=${
      i + 3
    }>${post}</span>`;
  };
  console.log("Index array ", index_array);
  console.log("removed word array ", removed_word_array);
  //
  return (
    <Box bg={"white"} m={20} p={10} rounded={"2xl"}>
      <p id="new__para">{para}</p>
      <Button onClick={handlePush}>Highlight</Button>{" "}
    </Box>
  );
  // if (index_array.length <= 0) {
  //   return (
  //     <Box bg={"white"} m={20} p={10} rounded={"2xl"}>
  //       <p id="new__para">{para}</p>
  //       <Button onClick={handlePush}>Highlight</Button>
  //     </Box>
  //   );
  // } else {
  //   return (
  //     <Box bg={"white"} m={20} p={10} rounded={"2xl"}>
  //       <span></span>
  //       <Button onClick={handlePush}>Highlight</Button>
  //     </Box>
  //   );
  // }
}

export default Highlight;
