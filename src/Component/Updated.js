import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import "./updated.css";
function Updated() {
  const [index_array, set_Index_array] = useState([]);
  const [removed_word_array, set_Removed_word_array] = useState([]);
  // const [selected_text, set_selectedText] = useState("");
  const [para, setPara] = useState(
    "In , concat() is a string method that is used to concatenate strings together. The concat() method appends one or more string values to the calling string and then returns the concatenated result as a new string. Because the concat way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers."
  );
  // let index_array = [];
  // let removed_word_array = [];
  // const handlePara = (val) => {
  //   // console.log(document.activeElement.tagName.toLocaleLowerCase() === "input");
  //   if (document.activeElement.tagName.toLocaleLowerCase() === "input") {
  //     const id = document.activeElement.id;
  //     console.log(document.getElementById(id).value);
  //   }
  // };

  const handlechange = () => {
    // const array_of_indexes = [4, 130, 210, 315, 500];
    let newPara = para
      .split("")
      .map((char, index) =>
        index_array.includes(index)
          ? `<input id=${index.toString()}></input>${""} `
          : char
      )
      .join("");
    document.getElementById("new__para").innerHTML = newPara;

    // newPara.split("")
    // .map((char, index) =>
    //   index_array.includes(index)
    //     ? `<input id=${index.toString()}></input>`
    //     : char
    // )
    // .join("");
  };

  const handleSubmit = () => {
    // const array_of_indexes = [4, 130, 210, 315, 500];
    const ansArray = [];
    index_array.map((id) => {
      const val = document.getElementById(id).value;

      return ansArray.push(val.trim());
    });
    ansArray.map((item, idx) => {
      if (item === removed_word_array[idx]) {
        console.log("Success");
      } else {
        console.log("Fail");
      }
      return item;
    });
    let i = 0;
    let newPara = para
      .split("")
      .map((char, index) =>
        index_array.includes(index) ? ansArray[i++] + " " : char
      )
      .join("");

    setPara(newPara);
    console.log(ansArray);
  };

  const handlePush = () => {
    // debugger;
    const str = document.getSelection();
    const range = str.getRangeAt(0); // index of selected string

    const start = range.startOffset;

    const end = start + str.toString().trim().length;

    const updated_index_array = [...index_array, start];
    set_Index_array(updated_index_array);

    console.log(start, end);

    set_Removed_word_array([
      ...removed_word_array,
      para.substring(start, end).trim(),
    ]); // removed word to validation)
    const pre = para.substring(0, start);
    const post = para.substring(end);
    setPara(pre + post);
    // let j = 0;
    // let p = para.split("").map((word, index) =>
    //   index_array.includes(index)
    //     ? `<span id="selected__text"}>
    //         ${word}
    //       </span>`
    //     : word
    // );
    // console.log(p);
    // setPara(p);
  };
  console.log("Index array ", index_array);
  console.log("removed word array ", removed_word_array);
  // console.log(para);

  return (
    <div>
      <Box bg={"white"} m={20} p={10} rounded={"2xl"}>
        <p id="new__para">{para}</p>

        <Button onClick={handlePush}>Highlight</Button>
        <Button onClick={handlechange}>Replace</Button>
        <Button onClick={handleSubmit}>Done</Button>
      </Box>
    </div>
  );
}

export default Updated;
