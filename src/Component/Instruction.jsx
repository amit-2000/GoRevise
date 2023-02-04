import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { BsCheck2Circle } from "react-icons/bs";

function Instruction() {
  return (
    <div className="field">
      <Box
        color="white"
        rounded={"2xl"}
        px={"20"}
        m={20}
        backgroundColor="rgba(142, 141, 141, .5)"
      >
        {" "}
        <Box display={"flex"}>
          {/* <img
            style={{
              width: "25px",
              marginTop: "3px",
            }}
            // src="images/note_icon.png"
            alt="BigCo Inc. logo"
          /> */}
          <Text className="title">🗒 Instructions</Text>
        </Box>
        <div className="tag">
          <Text className="list">
            Enter your text in the below editor. You can copy-paste your text
            too.
          </Text>
        </div>
        <div className="tag">
          <Text className="list">
            Click on Done{" "}
            <Text p={1}>
              <BsCheck2Circle fontSize={"25px"} color={"cyan"} />
            </Text>
            once completed
          </Text>
        </div>
      </Box>
    </div>
  );
}

export default Instruction;
