import React, { useState } from "react";

const InputChange = ({ index, str_arr }) => {
  //   const [inp_arr, setInp__arr] = useState([]);
  //   const handleInpute = (e) => {
  //     const val = [...inp_arr, e.target.value];
  //     setInp__arr(val);
  //   };
  //   console.log(inp_arr);

  const handleSubmit = () => {
    console.log("Helllooo");
    index.sort();
    const ans_array = [];
    str_arr.map((item, idx) => {
      if (index.includes(idx)) {
        const val = document.getElementById(idx).value;
        ans_array.push(val);
      }
    });
    index.map((item, idx) => {
      //   console.log(ans_array);
      const prevVal = str_arr[item].trim();
      if (prevVal === ans_array[idx]) {
        debugger;

        // console.log(prevVal, ans_array[idx]);
        str_arr[item] = ans_array[idx];
        document.getElementById(
          idx
        ).innerHTML = `<span class="correct">${ans_array[idx]}</span>`;
      } else {
        // console.log(prevVal, ans_array[idx]);
        str_arr[item] = ans_array[idx];
        console.log("Wrong");
      }
    });
    let itr = 0;
    str_arr.map((item, idx) => {
      if (index.includes(idx)) {
        console.log(idx);
        const val = ans_array[itr++];
      }
    });
  };
  return (
    <div>
      {str_arr.map((item, idx) => {
        if (index.includes(idx)) {
          return <input id={idx}></input>;
        } else return <span key={idx}>{item} </span>;
      })}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputChange;
