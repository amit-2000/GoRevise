import React from "react";
import Result from "./Result";
import "./input.css";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const InputChange = ({ index, str_arr, submit, setSubmit, disableInput }) => {
  let i = 1;
  return (
    <div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div id="makepdf" className="pdf" ref={ref} style={{ marginBottom: 10 }}>
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
    </div>
  );
};

export default InputChange;
