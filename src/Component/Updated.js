import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
function Updated() {
  const [para] = useState(
    "In , concat() is a string method that is used to concatenate strings together. The concat() method appends one or more string values to the calling string and then returns the concatenated result as a new string. Because the concat way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers."
  );
  const handlechange = (val) => {
    // console.log(document.activeElement.tagName.toLocaleLowerCase() === "input");
    if (document.activeElement.tagName.toLocaleLowerCase() === "input") {
      const id = document.activeElement.id;
      console.log(document.getElementById(id).value);
    }
  };

  const handleClick = () => {
    const array_of_indexes = [4, 130, 210, 315, 500];
    let newPara = para
      .split("")
      .map((char, index) =>
        array_of_indexes.includes(index)
          ? `<input id=${index.toString()}></input>`
          : char
      )
      .join("");
    document.getElementById("new__para").innerHTML = newPara;
  };
  const handleSubmit = () => {
    const array_of_indexes = [4, 130, 210, 315, 500];
    const ansArray = [];
    array_of_indexes.map((id) => {
      const val = document.getElementById(id).value;
      return ansArray.push(val);
    });
    console.log(ansArray);
  };
  return (
    <div>
      <Box bg={"white"} m={20} p={10} rounded={"2xl"}>
        <p onClick={handlechange} id="new__para">
          {para}
        </p>
        <Button onClick={handleClick} onChange={handlechange}>
          Change
        </Button>
        <Button onClick={handleSubmit} onChange={handlechange}>
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default Updated;
