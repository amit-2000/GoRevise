import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import "./hl.css";
function Highlight() {
  const [para] = useState(
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

    console.log("old ", start, end);
    // console.log(para);
    // const removedWord = str.substring(start, end).trim();
    // set_Removed_word_array([...removed_word_array, removedWord]); // array of removed words

    const TextContent = str.focusNode.nodeValue;
    console.log(TextContent);

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
  console.log("Index array ", index_array);
  console.log("removed word array ", removed_word_array);

  //
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
    console.log(ans_array);
    index_array.map((id, idx) => {
      if (removed_word_array[idx] === ans_array[idx].val) {
        // console.log("correct values");
        // var inp = document.getElementById(`${id + "b"}`);
        // inp.parentNode.removeChild(inp);
        return (document.getElementById(
          id
        ).innerHTML = `<span class="correct">${ans_array[idx].val}</span>`);
      } else {
        // console.log(removed_word_array[idx], ans_array[idx]);
        // var inp = document.getElementById(`${id + "b"}`);
        // inp.parentNode.removeChild(inp);
        return (document.getElementById(
          id
        ).innerHTML = `<span class="wrong">${ans_array[idx].val}</span>`);
      }
    });
  };
  return (
    <Box bg={"white"} m={20} p={10} rounded={"2xl"}>
      <p id="new__para">{para}</p>
      <Button onClick={handlePush}>Highlight</Button>{" "}
      <Button onClick={handleReplace}>Done</Button>{" "}
      <Button onClick={handleSubmit}>Submit</Button>{" "}
    </Box>
  );
}

export default Highlight;
