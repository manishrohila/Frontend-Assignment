import "./App.css";
import Logs from "./components/Logs/Logs";
import Navbar from "./components/Navbar/Navbar";
import Metrics from "./components/metrics/Metrics";

function App() {
  return (
    <>
      <Navbar/>
      {/* <Logs/> */}
      <Metrics/>
    </>

  );
}

export default App;
