import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import InputBox from "./Input";

function Suffix() {
  const para =
    "In , concat() is a string method that is used to concatenate strings together. The concat() method appends one or more string values to the calling string and then returns the concatenated result as a new string. Because the concat way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.";
  const [done, setDone] = useState(false);
  let [str1, setStr1] = useState(null);
  let [str2, setStr2] = useState(null);
  const [removedWord, setRemovedWord] = useState(null);
  let start, end;

  const handleClick = () => {
    const selectedString = document.getSelection(); // get selection
    console.log("length of selected string: ", selectedString.toString().length);
    if (selectedString.toString().length > 0) {
      const range = selectedString.getRangeAt(0); // index of selected string
      start = range.startOffset;
      end = range.endOffset;
      setRemovedWord(para.substring(start, end)); // removed word to validation
      str1 = para.slice(0, start);
      str2 = para.slice(end);
      setStr1(str1);
      setStr2(str2);
      setDone(true);
    }
  };
  console.log("removedWord word :", removedWord);
  if (done) {
    return (
      <InputBox
        str={str1}
        str2={str2}
        removedWord={removedWord}
        inputDone={setDone}
      />
    );
  } else {
    return (
      <Box bg={'white'} m={20} p={10} rounded={'2xl'}>
        <Text fontSize={'xl'}>{para}</Text>
        <Button onClick={handleClick} m={10} bg={'teal.300'}>Change String</Button>
      </Box>
    );
  }
}

export default Suffix;