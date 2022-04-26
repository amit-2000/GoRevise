import React from "react";
import "./result.css";
import ReactTooltip from "react-tooltip";
const Result = ({ str_arr }) => {
  console.log("In submit");
  console.log(str_arr);
  return (
    <div>
      {str_arr.map((item, idx) => {
        // return item.item ? item.result ==="true" ?"True result" :"False resukt":"Normal ans"
        return (
          <span key={idx}>
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
                    data-for="registerTip"
                    key={idx}
                  >
                    {item.prevVal}
                  </span>
                  <ReactTooltip id="registerTip" place="top" effect="solid">
                    {item.item.trim()}
                  </ReactTooltip>
                </span>
              )
            ) : (
              <span key={idx}> {item.trim()} </span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Result;
