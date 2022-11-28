import React, { useState, useEffect } from "react";
import "./result.css";
import ReactTooltip from "react-tooltip";
import { span, Box } from "@chakra-ui/react";

const Result = ({ user_inputeted_answers, index, str_arr }) => {
  const [corrcet_ans, setCorrectAns] = useState([]);
  console.log("index arr ", index);
  index.sort();
  useEffect(() => {
    str_arr.map((item, idx) => {
      if (index.includes(idx)) {
        corrcet_ans.push(item);
      }
      return "";
    });
    setCorrectAns(corrcet_ans);
  }, []);
  console.log(
    "correcr answers  ",
    corrcet_ans,
    " users input ",
    user_inputeted_answers
  );

  let i = 0;
  return (
    <Box>
      {str_arr.map((item, idx) => {
        <span>{i++}</span>;

        if (index.includes(idx)) {
          if (corrcet_ans[i] === user_inputeted_answers[i]) {
            return <span> {0}</span>;
          } else {
            return (
              <span>
                <span>{item}</span>
                <ReactTooltip id={idx} place="top" effect="solid">
                  {item}
                </ReactTooltip>
              </span>
            );
          }
        } else {
          <span key={idx}> {item} </span>;
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
