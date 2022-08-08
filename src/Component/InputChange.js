import React from "react";
import Result from "./Result";
import "./input.css";

const InputChange = ({ index, str_arr, submit, setSubmit, disableInput }) => {
  let i = 1;
  return (
    <div>
      {submit ? (
        <Result str_arr={str_arr} />
      ) : (
        str_arr.map((item, idx) => {
          if (index.includes(idx)) {
            return (
              <span>
                <b>{i++}</b>
                <input
                  className="inputBorder"
                  disabled={disableInput}
                  id={idx}
                ></input>
              </span>
            );
          } else return <span key={idx}>{item} </span>;
        })
      )}
    </div>
  );
};

export default InputChange;
