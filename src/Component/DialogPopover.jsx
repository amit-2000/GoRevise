import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Center,
  Box,
  HStack,
  Circle,
  Flex,
  //   Lorem,
  // useDisclosure,
} from "@chakra-ui/react";

const ReturnFocus = ({
  isOpen,
  onOpen,
  onClose,
  finalRef,
  correct_ans_count,
  count_blank,
}) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const finalRef = React.useRef();
  console.log("PPop up called", correct_ans_count, count_blank);

  return (
    <>
      {/* <Button mt={5} onClick={onOpen}>
        Open Modal
      </Button> */}
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent size="4xl">
          <ModalHeader
            my={"4"}
            textAlign="center"
            fontSize="3xl"
            fontWeight="bold"
          >
            Your final percentage is
            <Text fontSize="2xl" fontWeight="bold">
              🥁 (Drumroll) 🥁
            </Text>
          </ModalHeader>
          <Box>
            <Center>
              <Circle
                size="110px"
                bg="#f0f0f0"
                color="back"
                fontSize="3xl"
                fontWeight="bold"
                mt={"-25px"}
              >
                <Text>100%</Text>
              </Circle>
            </Center>
          </Box>

          <Box mt={"10"} fontSize="lg" fontWeight="600">
            <Center mt={"-34px"}>Go..little..Rockstar 🎸</Center>
          </Box>
          <ModalCloseButton />
          <ModalBody mt={"-20px"}>
            <Box>
              <HStack mt={"15px"} ml={"30px"}>
                <Flex direction={"column"}>
                  <Text>Fill in the blanks: {count_blank}</Text>
                  <Text>Correct answers: {correct_ans_count}</Text>
                  <Text>
                    Wrong answers:&nbsp;
                    <Text display={"inline"} ml={"-1px"}>
                      {" "}
                      {count_blank - correct_ans_count}
                    </Text>
                  </Text>
                </Flex>
              </HStack>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="#14dbd1"
              mr={"auto"}
              ml="auto"
              mt={"-10px"}
              mb={"8px"}
              w={"230px"}
              fontSize="23px"
              fontWeight="extrabold"
              letterSpacing={"0.5px"}
              onClick={onClose}
              borderRadius="60px"
              boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
            >
              View Answers
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReturnFocus;
