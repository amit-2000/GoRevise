import React from "react";
import Result from "./Result";
const InputChange = ({ index, str_arr, submit, setSubmit, handleSubmit }) => {
  // const [submit, setSubmit] = useState(false);
  // const handleSubmit = () => {
  //   console.log("Helllooo");
  //   index.sort();
  //   const ans_array = [];
  //   str_arr.map((item, idx) => {
  //     if (index.includes(idx)) {
  //       const val = document.getElementById(idx).value;
  //       ans_array.push(val);
  //     }
  //     return 0;
  //   });

  //   index.map((item, idx) => {
  //     //   console.log(ans_array);
  //     const prevVal = str_arr[item]; // old value at index[item].

  //     if (prevVal === ans_array[idx]) {
  //       // debugger;
  //       const inp_obj = { item: ans_array[idx], result: true };
  //       str_arr[item] = inp_obj;
  //     } else {
  //       // console.log(prevVal, ans_array[idx]);
  //       const inp_obj = { item: ans_array[idx], result: false };
  //       str_arr[item] = inp_obj;
  //       console.log("Wrong");
  //     }
  //     return 0;
  //   });
  //   setSubmit(true);

  //   // let itr = 0;
  //   // str_arr.map((item, idx) => {
  //   //   if (index.includes(idx)) {
  //   //     console.log(idx);
  //   //     // const val = ans_array[itr++];
  //   //   }
  //   //   return 0;
  //   // });
  // };
  console.log(str_arr);
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
      {/* {str_arr.map((item, idx) => {
        if (index.includes(idx)) {
          return <input id={idx}></input>;
        } else return <span key={idx}>{item} </span>;
      })} */}
    </div>
  );
};

export default InputChange;
