import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsefulInformation from "./pages/useful-information";
import AboutUs from "./pages/about-us";
import Investment from "./pages/investment";

const App = () => {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useful-information" element={<UsefulInformation />} />
          <Route path="/property-status/for-sale" element={<div>Just A Sec</div>} />
          <Route path="/property-status/for-rent" element={<div>Just A Sec</div>} />
          <Route path="/investment" element={<Investment />}/>
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>          
      </Router>
  );
}

export default App;
