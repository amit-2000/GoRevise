import React, { useState } from "react";
import Input from "./Input";

function Suffix() {
  const para =
    "In , concat() is a string method that is used to concatenate strings together. The concat() method appends one or more string values to the calling string and then returns the concatenated result as a new string. Because the concat() method is a method of the String object, it must be invoked through a particular instance of the String class.";
  const [done, setDone] = useState(false);
  let [str1, setStr1] = useState(null);
  let [str2, setStr2] = useState(null);
  let start, end;

  const handleClick = () => {
    const selectedString = document.getSelection();
    console.log(selectedString.toString().length);
    if (selectedString.toString().length > 0) {
      const range = selectedString.getRangeAt(0);
      start = range.startOffset;
      end = range.endOffset;
      str1 = para.slice(0, start);
      str2 = para.slice(end);
      setStr1(str1);
      setStr2(str2);
      setDone(true);
    }
  };

  if (done) {
    return <Input str={str1} str2={str2} />;
  } else {
    return (
      <div>
        <p>{para}</p>
        <button onClick={handleClick}>change string</button>
      </div>
    );
  }
}

export default Suffix;
