import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

function Highlight() {
  const [para, setPara] = useState(
    "In, concat() is a string method that is used to concatenate strings together. The concat() method appends one or more string values to the calling string and then returns the concatenated result as a new string. Because the concat way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers."
  );
  let [index_array, set_Index_array] = useState([]);
  const [removed_word_array, set_Removed_word_array] = useState([]);

  const handlePush = () => {
    debugger;
    const str = document.getSelection();
    const range = str.getRangeAt(0); // index of selected string
    console.log(range);
    console.log(str.toString());
    const start = range.startOffset; // starting Index
    const end = range.endOffset; // ending index

    const updated_index_array = [...index_array, start];
    set_Index_array(updated_index_array); // Array of Index

    console.log(start, end);
    set_Removed_word_array([
      ...removed_word_array,
      para.substring(start, end).trim(),
    ]); // array of removed words
   
    // let p = para.split("").map((word, index) =>
    //   index_array.includes(index) ? (
    //     <span key={index} style={{ backgroundColor: "red" }}>
    //       {word}
    //     </span>
    //   ) : (
    //     word
    //   )
    // );
    // console.log(p);
    // setPara(p);
  };
  console.log("Index array ", index_array);
  console.log("removed word array ", removed_word_array);
  //
  if (index_array.length <= 0) {
    return (
      <Box bg={"white"} m={20} p={10} rounded={"2xl"}>
        <p id="new__para">{para}</p>
        <Button onClick={handlePush}>Highlight</Button>
      </Box>
    );
  } else {
    return (
      <Box bg={"white"} m={20} p={10} rounded={"2xl"}>
        <p id="new__para">
          {para.split("").map((word, index) =>
            index_array.includes(index) ? (
              <span key={index} style={{ backgroundColor: "yellow" }}>
                {word}
              </span>
            ) : (
              word
            )
          )}
        </p>
        <Button onClick={handlePush}>Highlight</Button>
      </Box>
    );
  }
}

export default Highlight;
