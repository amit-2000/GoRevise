import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Suffix from "./Component/Suffix";
import Updated from "./Component/Updated";
function App() {
  return (
    <Box
      className="App"
      minH={"100vh"}
      bgImage={"/bg.png"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
      <Navbar />
      {/* <Suffix /> */}
      <Updated />
    </Box>
  );
}

export default App;
