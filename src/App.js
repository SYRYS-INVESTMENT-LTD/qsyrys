import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsefulInformation from "./pages/useful-information";
import AboutUs from "./pages/about-us";
import Investment from "./pages/investment";
import Rent from "./pages/property-status/for-rent";
import Sale from "./pages/property-status/for-sale";
import Overview from "./pages/overview";
import E404page from "./pages/e404page";

const App = () => {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useful-information" element={<UsefulInformation />} />
          <Route path="/property-status/for-sale" element={<Sale />} />
        <Route path="/property-status/for-rent" element={<Rent />} />
          <Route path="/investment" element={<Investment />}/>
          <Route path="/property/:id" element={<Overview />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<E404page />} />
        </Routes>          
      </Router>
  );
}

export default App;
