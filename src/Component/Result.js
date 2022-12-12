import React, { useState, useEffect } from "react";
import "./result.css";
import ReactTooltip from "react-tooltip";
import { Box } from "@chakra-ui/react";
import ReturnFocus from "./ResultPopup";
import { useDisclosure } from "@chakra-ui/react";
const Result = ({ user_inputeted_answers, index, str_arr }) => {
  const finalRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  //
  // const [corrcet_ans, setCorrectAns] = useState([]);
  console.log("index arr ", index);
  index.sort();
  const [correct_ans_count, setCorrect_ans_count] = useState(0);

  useEffect(() => {
    var cnt = 0;
    var itr = -1;
    str_arr.map((item, idx) => {
      if (index.includes(idx) === true) {
        itr++;
        if (item === user_inputeted_answers[itr]) {
          cnt = cnt + 1;
        }
      }
      return "";
    });
    setCorrect_ans_count(cnt);
    onOpen();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(correct_ans_count);
  let i = -1;
  let j = 0;
  return (
    <Box>
      <ReturnFocus
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        finalRef={finalRef}
        correct_ans_count={correct_ans_count}
        count_blank={index.length}
      />
      {str_arr.map((item, idx) => {
        if (index.includes(idx) === true) {
          i++;
          if (item === user_inputeted_answers[i]) {
            return (
              <span key={idx} className="ans__true">
                {item.trim()}
              </span>
            );
          } else {
            return (
              <span>
                <span
                  className="ans__false"
                  data-tip
                  data-for={user_inputeted_answers[j]}
                  key={idx}
                >
                  {item}
                </span>
                <ReactTooltip
                  id={user_inputeted_answers[j]}
                  place="top"
                  effect="solid"
                >
                  {user_inputeted_answers[j++]}
                </ReactTooltip>
              </span>
            );
          }
        } else {
          return <span> {item} </span>;
        }
      })}
      {/* <span key={idx} >
              {item.item ? (
                item.result === true ? (
                  <span key={idx} className="ans__true">
                    {item.item.trim()}
                  </span>
                ) : (
                  <span>
                    <span
                      className="ans__false"
                      data-tip
                      data-for={item.id}
                      key={idx}
                    >
                      {item.item}
                    </span>
                    <ReactTooltip id={item.id} place="top" effect="solid">
                      {item.prevVal}
                    </ReactTooltip>
                  </span>
                )
              ) : (
                <span key={idx}> {item} </span>
              )}
            </span> */}
    </Box>
  );
};

export default Result;
