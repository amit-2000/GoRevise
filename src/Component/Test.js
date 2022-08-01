import React, { useState } from "react";
import "./highlightCSS.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import ReturnFocus from "./DialogPopover";
import { useDisclosure } from "@chakra-ui/react";
import Save from "./Save_take_Quiz";
import Instructions from "./Instructions";
import EditDoneNavbar from "./Edit_done_navbar";
import SubmitPage from "./SubmitPage";
import InputText from "./InputText";
const Test = ({ inputText, editText }) => {
  //
  const [para] = useState(inputText);
  const finalRef = React.useRef();
  const [showCreate, setCreate] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count_blank, setCount_blank] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [inp, setInp] = useState(false);
  const [str_arr, setStr_arr] = useState(para.split(" ")); //split given input, each word is element of array.
  const [index, setIndex] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [hideBtn, setHideBtn] = useState(false);

  // Select-Deselect words
  const handleHighlight = (e, idx) => {
    let newIndexArr;
    if (index.indexOf(idx) === -1) {
      newIndexArr = [...index, idx];
      setIndex(newIndexArr);
      // console.log(newIndexArr);
    } else {
      newIndexArr = index.filter((item) => item !== idx);
      console.log(newIndexArr);
      setIndex(newIndexArr);
    }
    setToggle(false);
    setCount_blank(index.length + 1);
    // console.log(count_blank);
    e.preventDefault();
  };

  const handleDone = () => {
    // debugger;
    setCreate(true);
    setInp(true);
    setHideBtn(true);
  };

  //  Click on Done btn after filling the text in input.
  const handleSubmit = () => {
    onOpen();
    index.sort();
    const ans_array = [];
    str_arr.map((item, idx) => {
      if (index.includes(idx)) {
        const val = document.getElementById(idx).value;
        ans_array.push(val);
        // console.log(val);
      }
      return 0;
    });

    index.map((item, idx) => {
      const prevVal = str_arr[item]; // old value at index[item].
      if (prevVal === ans_array[idx]) {
        // debugger;

        const inp_obj = {
          item: ans_array[idx],
          result: true,
        };
        str_arr[item] = inp_obj;
        const new_str_arr = str_arr;
        setStr_arr(new_str_arr);
      } else {
        let id = Date.now().toString() + prevVal;
        const inp_obj = {
          id: id,
          prevVal: prevVal,
          item: ans_array[idx],
          result: false,
        };
        str_arr[item] = inp_obj;
        const new_str_arr = str_arr;
        setStr_arr(new_str_arr);
        // console.log("Wrong");
      }
      return 0;
    });
    // console.log(str_arr);
    setSubmit(true);
  };

  const handleSave = () => {
    setCreate(false);
  };

  // count correct answers.
  const corrcet_ans = () => {
    let cnt = 0;
    str_arr.map((item) => {
      if (item.result === true) {
        cnt++;
      }
      return cnt;
    });
    return cnt;
  };

  return (
    <>
      {showCreate ? (
        <Save handleSave={handleSave} />
      ) : (
        <Box
          overflow="hidden"
          bgImage={"/bg.png"}
          minH={"100vh"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
        >
          <Navbar color="white" />

          <ReturnFocus
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            finalRef={finalRef}
            correct_ans_count={corrcet_ans}
            count_blank={count_blank}
          />
          <div className="field">
            <Instructions />
          </div>

          <Box bg={"white"} m={20} rounded={"2xl"}>
            {!hideBtn && (
              <EditDoneNavbar
                editText={editText}
                inputText={inputText}
                handleDone={handleDone}
              />
            )}
            {hideBtn && (
              <SubmitPage editText={editText} handleSubmit={handleSubmit} />
            )}
            <InputText
              str_arr={str_arr}
              inp={inp}
              index={index}
              submit={submit}
              setSubmit={setSubmit}
              toggle={toggle}
              handleHighlight={handleHighlight}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Test;
