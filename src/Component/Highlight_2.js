import React, { useState } from "react";
import "./highlightCSS.css";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { BiUndo, BiRedo, BiCheck, BiPencil } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import Navbar from "./Navbar";
import InputChange from "./InputChange";

function HighlightTwo() {
  const [para] = useState(
    "Many novice writers tend to make a sharp distinction between content and style, thinking that a paper can be strong in one and weak in the other, but focusing on organization shows how content and style converge in deliberative academic writing. Your professors will view even the most elegant prose as rambling and tedious if there isn’t a careful, coherent argument to give the text meaning. Paragraphs are the “stuff ” of academic writing and, thus, worth our attention here."
  );
  const [toogle, setToggle] = useState(false);
  const [inp, setInp] = useState(false);
  // const str_arr = para.split(" ");
  const [str_arr, setStr_arr] = useState(para.split(" "));
  const [index, setIndex] = useState([]);
  const [submit, setSubmit] = useState(false);
  console.log(index);
  const handleHighlight = (e, idx) => {
    setToggle(false);
    e.preventDefault();
    const new_index = [...index, idx];
    setIndex(new_index);
  };
  const highlight = () => {
    setToggle(true);
  };
  const handleInput = () => {
    // debugger;
    setInp(true);
    // setToggle(false);
  };
  const handleSubmit = () => {
    console.log("Helllooo");
    index.sort();
    const ans_array = [];
    str_arr.map((item, idx) => {
      if (index.includes(idx)) {
        const val = document.getElementById(idx).value;
        ans_array.push(val);
      }
      return 0;
    });

    index.map((item, idx) => {
      //   console.log(ans_array);
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
        const id = item + Date.now().toString();
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
    // debugger;
    console.log(str_arr);
    // setStr_arr(str_arr);
    setSubmit(true);

    // let itr = 0;
    // str_arr.map((item, idx) => {
    //   if (index.includes(idx)) {
    //     console.log(idx);
    //     // const val = ans_array[itr++];
    //   }
    //   return 0;
    // });
  };
  return (
    <Box
      overflow="hidden"
      bgImage={"/bg.png"}
      minH={"100vh"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
      <Navbar color="white" />
    <div className="field">
    <Box color="white" rounded={"2xl"} px={"20"} m={20} bg= {"rgb(255,160,122,.9)"}>
      <p class="title">Instructions:</p>
      <div className="tag">
      <p class="list" >Edit the text like a normal word document. You can add and remove text too.</p>
      </div>
      <div className="tag">
      <p class="list">Click on "Highlight" <BiPencil fontSize={"20px"} color={"cyan"}/>and simply highlight the words you want to blank out.</p>
      </div>
      <div className="tag">
      <p class="list">After editing, click on "done" <BiCheck fontSize={"30px"} color={"cyan"}/> to create your fill-in quiz.</p>
      </div>
    </Box>
    </div>
      <Box bg={"white"} m={20} rounded={"2xl"}>
        <HStack
          my={5}
          bg="black"
          color="white"
          px={"96"}
          justifyContent={"space-around"}
          alignItems={"center"}
          roundedTop={"2xl"}
          py={1}
          textAlign="center"
        >
          <Box mx={5}>
            <Button
              color={"cyan"}
              backgroundColor={"black"}
              _hover={"black"}
              _focus={{ border: "none" }}
              variant={"unstyled"}
            >
              <BiUndo fontSize={"30px"} color={"cyan"} />
            </Button>
            <Text className="textshift">Undo</Text>
          </Box>
          <Box mx={5}>
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
          <Box mx={5} onClick={highlight}>
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
              <BiCheck
                fontSize={"30px"}
                color={"cyan"}
                // onClick={handleReplace}
              />
            </Button>
            <Text className="textshift">Done</Text>
          </Box>
          <Box mx={5} onClick={handleSubmit}>
            <Button
              color={"cyan"}
              backgroundColor={"black"}
              _hover={"black"}
              _focus={{ border: "none" }}
              variant={"unstyled"}
            >
              <BsCheck2Circle fontSize={"30px"} color={"cyan"} />
            </Button>
            <Text className="textshift">Submit</Text>
          </Box>
        </HStack>

        <Text id="new_para" as={"p"} fontSize={"lg"} p="8">
          {inp ? (
            <InputChange
              id=""
              index={index}
              str_arr={str_arr}
              handleSubmit={handleSubmit}
              submit={submit}
              setSubmit={setSubmit}
            />
          ) : toogle ? (
            str_arr.map((item, idx) => {
              return (
                <span
                  key={idx}
                  onClick={(e) => handleHighlight(e, idx)}
                  className={
                    index.includes(idx) ? "highlight__yellow" : "hover-item"
                  }
                >
                  {item}{" "}
                </span>
              );
            })
          ) : (
            str_arr.map((item, idx) => {
              return (
                <span
                  key={idx}
                  onClick={(e) => handleHighlight(e, idx)}
                  className={index.includes(idx) ? "highlight" : "hover-item"}
                >
                  {item}{" "}
                </span>
              );
            })
          )}
        </Text>
      </Box>
    </Box>
  );
}

export default HighlightTwo;
