import React from 'react'
import { Text } from "@chakra-ui/react";
import InputChange from './InputChange';
const InputText = ({
  str_arr,
  inp,
  index,
  submit,
  setSubmit,
  toggle,
  handleHighlight,
}) => {
  return (
    <Text id="new_para" as={"p"} mt={"-35px"} fontSize={"lg"} p="8">
      {inp ? (
        <InputChange
          id=""
          index={index}
          str_arr={str_arr}
          submit={submit}
          setSubmit={setSubmit}
        />
      ) : toggle ? (
        str_arr.map((item, idx) => {
          return (
            <Text
              as="span"
              key={idx}
              onClick={(e) => handleHighlight(e, idx)}
              className={
                index.includes(idx) ? "highlight__yellow" : "hover-item"
              }
            >
              {item}{" "}
            </Text>
          );
        })
      ) : (
        str_arr.map((item, idx) => {
          return (
            <Text
              as="span"
              key={idx}
              onClick={(e) => handleHighlight(e, idx)}
              className={index.includes(idx) ? "highlight" : "hover-item"}
            >
              {item}{" "}
            </Text>
          );
        })
      )}
    </Text>
  );
};

export default InputText;