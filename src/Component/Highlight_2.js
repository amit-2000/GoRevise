import React, { useState } from "react";
import "./highlightCSS.css";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { BiUndo, BiRedo, BiCheck, BiPencil } from "react-icons/bi";
// import { BsCheck2Circle } from "react-icons/bs";
import Navbar from "./Navbar";
import InputChange from "./InputChange";
import ReturnFocus from "./DialogPopover";
import { useDisclosure } from "@chakra-ui/react";
import Save from "./Save_take_Quiz";
const HighlightTwo = ({ inputText, editText }) => {
  const [para] = useState(inputText);
  const finalRef = React.useRef();
  const [showCreate, setCreate] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [correct_ans_count, setCorrect_ans_count] = useState(0);
  const [count_blank, setCount_blank] = useState(0);
  const [toogle, setToggle] = useState(false);
  const [inp, setInp] = useState(false);
  // const str_arr = para.split(" ");
  const [str_arr, setStr_arr] = useState(para.split(" "));
  const [index, setIndex] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [hideBtn, setHideBtn] = useState(false);

  const handleHighlight = (e, idx) => {
    let newIndexArr;
    if (index.indexOf(idx) === -1) {
      newIndexArr = [...index, idx];
      setIndex(newIndexArr);
      console.log(newIndexArr);
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

  const highlight = () => {
    setToggle(true);
  };

  const handleInput = () => {
    // debugger;
    setCreate(true);
    setInp(true);
    setHideBtn(true);
    // setToggle(false);
  };

  const handleSubmit = () => {
    onOpen();
    console.log("Helllooo");
    index.sort();
    const ans_array = [];
    str_arr.map((item, idx) => {
      if (index.includes(idx)) {
        const val = document.getElementById(idx).value;
        ans_array.push(val);
        console.log(val);
      }
      return 0;
    });
    index.sort();
    index.map((item, idx) => {
      //   console.log(ans_array);
      const prevVal = str_arr[item]; // old value at index[item].
      console.log(ans_array[idx]);
      if (prevVal === ans_array[idx]) {
        // debugger;
        setCorrect_ans_count(correct_ans_count + 1);
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
        console.log("Wrong");
      }
      return 0;
    });
    console.log(str_arr);
    setSubmit(true);
  };

  const handleSave = () => {
    setCreate(false);
  };

  // console.log("correct_ans_count", correct_ans_count);
  // console.log("wrong_ans_count", count_blank - correct_ans_count);
  console.log(str_arr);
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
            correct_ans_count={correct_ans_count}
            count_blank={count_blank}
          />
          <div className="field">
            <Box
              color="white"
              rounded={"2xl"}
              px={"20"}
              m={20}
              bg={"rgb(255,160,122,.9)"}
            >
              <p className="title">Instructions:</p>
              <div className="tag">
                <p className="list">
                  Edit the text like a normal word document. You can add and
                  remove text too.
                </p>
              </div>
              <div className="tag">
                <p className="list">
                  Click on "Highlight"{" "}
                  <BiPencil fontSize={"20px"} color={"cyan"} />
                  and simply highlight the words you want to blank out.
                </p>
              </div>
              <div className="tag">
                <p className="list">
                  After editing, click on "done"{" "}
                  <BiCheck fontSize={"30px"} color={"cyan"} /> to create your
                  fill-in quiz.
                </p>
              </div>
            </Box>
          </div>

          <Box bg={"white"} m={20} rounded={"2xl"}>
            {!hideBtn && (
              <HStack
                my={5}
                bg="black"
                color="white"
                // px={"96"}
                justifyContent={"center"}
                alignItems={"center"}
                roundedTop={"2xl"}
                py={1}
                textAlign="center"
              >
                <Box mx={5} style={{ marginRight: "10px" }}>
                  <Button
                    color={"cyan"}
                    backgroundColor={"black"}
                    _hover={"black"}
                    _focus={{ border: "none" }}
                    variant={"unstyled"}
                    onClick={(e) => editText(e, inputText)}
                  >
                    <BiUndo fontSize={"30px"} color={"cyan"} />
                  </Button>
                  <Text className="textshift">Edit</Text>
                </Box>
                <Box mx={10} style={{ marginRight: "10px" }}>
                  <Button
                    color={"cyan"}
                    backgroundColor={"black"}
                    _hover={"black"}
                    _focus={{ border: "none" }}
                    variant={"unstyled"}
                  >
                    <BiRedo
                      fontSize={"30px"}
                      color={"cyan"}
                      // onClick={handleReplace}
                    />
                  </Button>
                  <Text className="textshift">Redo</Text>
                </Box>
                <Box mx={5} onClick={highlight} style={{ marginRight: "10px" }}>
                  <Button
                    color={"cyan"}
                    backgroundColor={"black"}
                    _hover={"black"}
                    _focus={{ border: "none" }}
                    variant={"unstyled"}
                  >
                    <BiPencil fontSize={"30px"} color={"cyan"} />
                  </Button>
                  <Text className="textshift">Highlight</Text>
                </Box>
                <Box mx={5} onClick={handleInput}>
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
              </HStack>
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
              >
                <Box mx={5} onClick={handleSubmit}>
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
              </HStack>
            )}
            {/* </HStack> */}

            <Text id="new_para" as={"p"} mt={"-35px"} fontSize={"lg"} p="8">
              {inp ? (
                <InputChange
                  id=""
                  index={index}
                  str_arr={str_arr}
                  submit={submit}
                  setSubmit={setSubmit}
                />
              ) : toogle ? (
                str_arr.map((item, idx) => {
                  return (
                    <Text
                      as="span"
                      key={idx}
                      onClick={(e) => handleHighlight(e, idx)}
                      className={
                        index.includes(idx) ? "highlight__yellow" : "hover-item"
                      }
                    >
                      {item}{" "}
                    </Text>
                  );
                })
              ) : (
                str_arr.map((item, idx) => {
                  return (
                    <Text
                      as="span"
                      key={idx}
                      onClick={(e) => handleHighlight(e, idx)}
                      className={
                        index.includes(idx) ? "highlight" : "hover-item"
                      }
                    >
                      {item}{" "}
                    </Text>
                  );
                })
              )}
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
};

export default HighlightTwo;
