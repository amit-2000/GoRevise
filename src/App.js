import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Suffix from "./Component/Suffix";
function App() {
  return (
    <Box className="App"  minH={'100vh'} bgImage={'/bg.png'} bgRepeat={'no-repeat'} bgSize={'cover'}>
      <Navbar />
      <Suffix />
    </Box>
  );
}

export default App;
