import React, { useState } from "react";
import "./highlightCSS.css";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  BiUndo,
  BiCheck,
  BiPencil,
  BiShare,
  BiSpreadsheet,
} from "react-icons/bi";
// import { BsCheck2Circle } from "react-icons/bs";
import Navbar from "./Navbar";
import InputChange from "./InputChange";
import ReturnFocus from "./DialogPopover";
import { useDisclosure } from "@chakra-ui/react";
import SaveAndTakeQuiz from "./Save_take_Quiz";
import Instruction from "./Instruction";
import EnterInInputBox from "./EnterInInputBox";
import ShowButtons from "./ShowButtons";
const HighlightTwo = ({ inputText, editText }) => {
  const finalRef = React.useRef();
  const [show_choice_page, setShow_page] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [correct_ans_count, setCorrect_ans_count] = useState(0);
  const [count_blank, setCount_blank] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [disable_input_box, setDisable_input_box] = useState(false);
  const [str_arr, setStr_arr] = useState(inputText.split(" ")); //split given input, each word is element of array.
  const [index, setIndex] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [hideBtn, setHideBtn] = useState(false);
  const [viewScore, setViewScore] = useState(false);
  const [viewDone, setViewDone] = useState(true);
  const [hightlight, setHighlight] = useState(false);
  const [disableInput, setDisableInput] = useState(false);
  // Select-Deselect words
  const handleHighlight = (e, idx) => {
    let newIndexArr;
    if (index.indexOf(idx) === -1) {
      newIndexArr = [...index, idx];
      setIndex(newIndexArr);
    } else {
      newIndexArr = index.filter((item) => item !== idx);
      console.log(newIndexArr);
      setIndex(newIndexArr);
    }
    setToggle(false);
    setCount_blank(index.length + 1);
    console.log(count_blank);
    e.preventDefault();
  };

  // REMOVE for Direct yellow highlight
  const highlight = () => {
    debugger;
    setToggle(true);
    setHighlight(true);
  };

  const handleDone = () => {
    // debugger;
    setShow_page(true);
    setDisable_input_box(true);
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

        // setCorrect_ans_count(correct_ans_count + 1);
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
    setShow_page(false);
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
  // console.log("correct_ans_count", correct_ans_count);
  // console.log("wrong_ans_count", count_blank - correct_ans_count);
  // console.log(str_arr);
  const handleViewScore_and_done = () => {
    handleSubmit();
    onOpen();
    setViewScore(true);
    setViewDone(false);
    setDisableInput(true);
  };
  return (
    <>
      {show_choice_page ? (
        <SaveAndTakeQuiz handleSave={handleSave} />
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
          <Instruction />

          <Box bg={"white"} m={20} rounded={"2xl"}>
            {!hideBtn && (
              <ShowButtons
                hideBtn={hideBtn}
                editText={editText}
                handleDone={handleDone}
                inputText={inputText}
                highlight={highlight}
              />
              // <HStack
              //   cursor="pointer"
              //   my={5}
              //   bg="black"
              //   color="white"
              //   // px={"96"}
              //   justifyContent={"center"}
              //   alignItems={"center"}
              //   roundedTop={"2xl"}
              //   py={1}
              //   textAlign="center"
              // >
              //   <Box mx={5} style={{ marginRight: "10px" }}>
              //     <Button
              //       color={"cyan"}
              //       backgroundColor={"black"}
              //       _hover={"black"}
              //       _focus={{ border: "none" }}
              //       variant={"unstyled"}
              //       onClick={(e) => editText(e, inputText)}
              //     >
              //       <BiUndo fontSize={"30px"} color={"cyan"} />
              //     </Button>
              //     <Text className="textshift">Edit</Text>
              //   </Box>

              //   {!hightlight && (
              //     <Box
              //       mx={5}
              //       onClick={highlight}
              //       style={{ marginRight: "10px" }}
              //     >
              //       <Button
              //         color={"cyan"}
              //         backgroundColor={"black"}
              //         _hover={"black"}
              //         _focus={{ border: "none" }}
              //         variant={"unstyled"}
              //       >
              //         <BiPencil fontSize={"30px"} color={"cyan"} />
              //       </Button>
              //       <Text className="textshift">Highlight</Text>
              //     </Box>
              //   )}
              //   {hightlight && (
              //     <Box mx={5} onClick={handleDone}>
              //       <Button
              //         color={"cyan"}
              //         backgroundColor={"black"}
              //         _hover={"black"}
              //         _focus={{ border: "none" }}
              //         variant={"unstyled"}
              //         // variant={"unstyled"}
              //       >
              //         <BiCheck fontSize={"30px"} color={"cyan"} />
              //       </Button>
              //       <Text className="textshift">Done</Text>
              //     </Box>
              //   )}
              // </HStack>
            )}
            {hideBtn && (
              <HStack
                my={5}
                bg="black"
                color="white"
                px={"8"}
                justifyContent={"right"}
                alignItems={"center"}
                roundedTop={"2xl"}
                py={1}
                textAlign="center"
                cursor="pointer"
              >
                {viewScore && (
                  <Box mx={5} onClick={handleSubmit}>
                    <Button
                      color={"cyan"}
                      backgroundColor={"black"}
                      _hover={"black"}
                      _focus={{ border: "none" }}
                      variant={"unstyled"}
                    >
                      <BiSpreadsheet fontSize={"30px"} color={"cyan"} />
                    </Button>
                    <Text className="textshift">view score</Text>
                  </Box>
                )}
                {viewScore && (
                  <Box mx={5}>
                    <Button
                      color={"cyan"}
                      backgroundColor={"black"}
                      _hover={"black"}
                      _focus={{ border: "none" }}
                      variant={"unstyled"}
                    >
                      <BiShare fontSize={"30px"} color={"cyan"} />
                    </Button>
                    <Text className="textshift">Go back</Text>
                  </Box>
                )}
                {viewScore && (
                  <Link to="/">
                    <Box mx={5} onClick={(e) => handleViewScore_and_done()}>
                      <Button
                        color={"cyan"}
                        backgroundColor={"black"}
                        _hover={"black"}
                        _focus={{ border: "none" }}
                        variant={"unstyled"}
                      >
                        <BiCheck fontSize={"30px"} color={"cyan"} />
                      </Button>
                      <Text className="textshift">Done</Text>
                    </Box>
                  </Link>
                )}
                {viewDone && (
                  <Box mx={5} onClick={(e) => handleViewScore_and_done()}>
                    <Button
                      color={"cyan"}
                      backgroundColor={"black"}
                      _hover={"black"}
                      _focus={{ border: "none" }}
                      variant={"unstyled"}
                    >
                      <BiCheck fontSize={"30px"} color={"cyan"} />
                    </Button>
                    <Text className="textshift">Done </Text>
                  </Box>
                )}
              </HStack>
            )}
            {/* </HStack> */}

            <Text id="new_para" as={"p"} mt={"-35px"} fontSize={"lg"} p="8">
              {disable_input_box ? (
                <InputChange
                  id=""
                  index={index}
                  str_arr={str_arr}
                  submit={submit}
                  setSubmit={setSubmit}
                  disableInput={disableInput}
                />
              ) : (
                <EnterInInputBox
                  disable_input_box={disable_input_box}
                  handleHighlight={handleHighlight}
                  index={index}
                  str_arr={str_arr}
                  toggle={toggle}
                />
              )}
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
};

export default HighlightTwo;
