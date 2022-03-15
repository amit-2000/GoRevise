import { Box } from "@chakra-ui/react";
import "./App.css";
// import Create from "./Component/Create";
import Highlight from "./Component/Highlight";
// import Highlight from "./Component/hl";
// import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
// import Quiz from "./Component/Quiz";
// import Suffix from "./Component/Suffix";
// import Updated from "./Component/Updated";
function App() {
  return (
    <Box
      className="App"
      minH={"100vh"}
      bgImage={"/bg.png"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
      <Navbar color={"white"} />
      <Highlight />
    </Box>
  );
}

export default App;
