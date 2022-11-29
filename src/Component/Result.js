import React, { useState, useEffect } from "react";
import "./result.css";
import ReactTooltip from "react-tooltip";
import { Box } from "@chakra-ui/react";

const Result = ({ user_inputeted_answers, index, str_arr }) => {
  const [corrcet_ans, setCorrectAns] = useState([]);
  console.log("index arr ", index);
  index.sort();

  useEffect(() => {
    str_arr.map((item, idx) => {
      if (index.includes(idx)) {
        corrcet_ans.push(item);
      }
      return null;
    });
    setCorrectAns(corrcet_ans);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(
    "correcr answers  ",
    corrcet_ans,
    " users input ",
    user_inputeted_answers
  );

  let i = -1;

  return (
    <Box>
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
                  data-for={item.id}
                  key={idx}
                >
                  {item}
                </span>
                <ReactTooltip
                  id={Date.now().toString() + item}
                  place="top"
                  effect="solid"
                >
                  {item}
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
