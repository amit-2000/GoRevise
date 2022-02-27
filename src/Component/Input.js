import { Box, Button, Text, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import "./input.css";

const InputBox = ({ str, str2, removedWord, inputDone }) => {

  const [input, setInput] = useState(""); // input string.
  const [done, setDoneInput] = useState(false); // hide unhide Input field.
  const [disable, setDisable] = useState(false); // disable btn if input field is empty.

  const handleChange = (e) => {
    // console.log(e.target.value);
    setDisable(false); // have input ? btn-disable = false :
    setInput(e.target.value);
  };
  const handleClick = () => {
    if (input.length === 0) {
      console.log("Btn is disbled , enter string input");
      setDisable(true);
      return;
    }
    setDoneInput(true);
  };
  const handleRestart = () => {
    inputDone(false); // restart again with new para.
  };

  return (
    <Box bg={'white'} m={20} p={10} rounded={'2xl'}>
      <Text fontSize={'xl'}>
        {str + " "}
        <Text as={'span'}
          className={
            done
              ? input === removedWord
                ? "replaced__word-correct"
                : "replaced__word-wrong"
              : ""
          }
        >
          {" "}
          {done ? input : <Input onChange={handleChange} maxW={'10rem'} fontSize={'xl'} borderColor={'black'} border={'none'} borderBottom={'2px'} _focus={{border: "none", borderBottom: "2px"}}></Input>}
        </Text>
        {" " + str2}
      </Text>
      <Button onClick={handleClick} disabled={disable} m={10} colorScheme={"teal"}>
        submit
      </Button>
      <Button onClick={handleRestart} m={10} colorScheme={"teal"}>restart</Button>
    </Box>
  );
};

export default InputBox;
