import React from "react";
import Result from "./Result";
const InputChange = ({ index, str_arr, submit, setSubmit, handleSubmit }) => {
  return (
    <div>
      {submit ? (
        <Result str_arr={str_arr} />
      ) : (
        str_arr.map((item, idx) => {
          if (index.includes(idx)) {
            return <input id={idx}></input>;
          } else return <span key={idx}>{item} </span>;
        })
      )}
  
    </div>
  );
};

export default InputChange;
