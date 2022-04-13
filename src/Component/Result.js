import React from "react";
import "./result.css";
const Result = ({ str_arr }) => {
  console.log("In submit");
  console.log(str_arr);
  return (
    <div>
      {str_arr.map((item, idx) => {
        // return item.item ? item.result ==="true" ?"True result" :"False resukt":"Normal ans"
        return (
          <span>
            {item.item ? (
              item.result === true ? (
                <span key={idx} className="ans__true">
                  {item.item.trim()}
                </span>
              ) : (
                <span className="ans__false" key={idx}>
                  {item.item.trim()}
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
