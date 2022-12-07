import React from "react";
import { Text } from "@chakra-ui/react";

function Texts({ toggle, str_arr, handleHighlight, index }) {
  return toggle
    ? str_arr.map((item, idx) => {
        return (
          <Text as="span">
            <Text
              as="span"
              key={idx}
              onClick={() => handleHighlight(idx)}
              className={
                index.includes(idx) ? "highlight__yellow" : "hover-item"
              }
            >
              {item}
            </Text>
            <Text as="span"> </Text>
          </Text>
        );
      })
    : str_arr.map((item, idx) => {
        return (
          <Text as="span">
            <Text
              as="span"
              key={idx}
              onClick={(e) => handleHighlight(e, idx)}
              className={index.includes(idx) ? "highlight" : "hover-item"}
            >
              {item}
            </Text>
            <Text as="span"> </Text>
          </Text>
        );
      });
}

export default Texts;
