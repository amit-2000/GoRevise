import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
function Updated() {
  const [index_array, set_Index_array] = useState([]);
  const [removed_word_array, set_Removed_word_array] = useState([]);
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
          ? `<input id=${index.toString()}></input>`
          : char
      )
      .join("");
    document.getElementById("new__para").innerHTML = newPara;
  };

  const handleSubmit = () => {
    // const array_of_indexes = [4, 130, 210, 315, 500];
    const ansArray = [];
    index_array.map((id) => {
      const val = document.getElementById(id).value;

      ansArray.push(val.trim());
    });
    let i = 0;
    let newPara = para
      .split("")
      .map((char, index) =>
        index_array.includes(index) ? ansArray[i++] + " " : char
      )
      .join("");
    // document.getElementById("new__para").innerHTML = newPara;
    // } else {
    //   console.log("Fail");
    // }
    // });
    setPara(newPara);
    console.log(ansArray);
  };

  const handlePush = () => {
    // debugger;
    const str = document.getSelection();
    const range = str.getRangeAt(0); // index of selected string

    const start = range.startOffset;
    const end = range.endOffset;

    const updated_index_array = [...index_array, start];
    set_Index_array(updated_index_array);

    console.log(start, end);

    set_Removed_word_array([
      ...removed_word_array,
      para.substring(start, end).trim(),
    ]); // removed word to validation)

    const str1 = para.slice(0, start);
    const str2 = para.slice(end);
    setPara(str1 + " " + str2);
  };
  console.log("Index array ", index_array);
  console.log("removed word array ", removed_word_array);

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
