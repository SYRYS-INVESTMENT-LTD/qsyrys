import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsefulInformation from "./pages/useful-information";

const App = () => {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useful-information" element={<UsefulInformation />} />

        </Routes>          
      </Router>
  );
}

export default App;
