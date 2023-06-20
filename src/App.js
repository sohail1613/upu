import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tower from "./upu/Tower";
import Gauge from "./upu/Gauge";
import GaugeCalculator from "./upu/GaugeCalculator";
import RightNavBar from "./upu/RightNavBar";
import LeftBarExpand from "./upu/LeftBarExpand";
import RightMenuBar from "./upu/RightMenuBar";
import FactoryLayout from "./upu/FactoryLayout";
import Mobile from "./upu/responsive/components/Mobile";
import BasicFrom from "./employeeDetails/BasicFrom";
import Header from "./employeeDetails/Header";
import Footer from "./employeeDetails/Footer";

function App() {
  return (
    <>
    <Header />
      <Router>
        <Routes>
          <Route path="" element={<BasicFrom />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

// <div>
//   <BasicFrom />
// </div>
// <Tower />
// <Gauge />
// <LeftBarExpand />
// <RightNavBar />
// <RightMenuBar />
// <FactoryLayout />
// <GaugeCalculator />
// className="flex w-full h-[635px]"
