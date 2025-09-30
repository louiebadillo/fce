import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Tracking from './components/Tracking';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import About from "./pages/About";
import Career from "./pages/Careers/Career";
import Companionship from "./pages/Services/ServicePages/Companionship";
import PersonalCare from "./pages/Services/ServicePages/PersonalCare";
import AppointmentSupport from "./pages/Services/ServicePages/AppointmentSupport";
import Babysitting from "./pages/Services/ServicePages/Babysitting";
import DementiaCare from "./pages/Services/ServicePages/DementiaCare";
import Housekeeping from "./pages/Services/ServicePages/Housekeeping";
import PalliativeCare from "./pages/Services/ServicePages/PalliativeCare";
import RespiteCare from "./pages/Services/ServicePages/RespiteCare";
import SpecialNeeds from "./pages/Services/ServicePages/SpecialNeeds";
import MealPreparation from "./pages/Services/ServicePages/MealPreparation";
import CDHCI from "./pages/Resources/CDHCI";
import FinancialAid from "./pages/Resources/FinancialAid";
import FAQ from "./pages/Resources/FAQ"
import JobApplication from "./pages/Careers/JobApplication";
import Staffing from "./pages/Services/ServicePages/Staffing";

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Tracking />
      <div>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contact" element={<Contact />} />

            {/* Services Routes */}
            <Route path="/services/companionship" element={<Companionship />} />
            <Route path="/services/personal-care" element={<PersonalCare />} />
            <Route path="/services/appointment" element={<AppointmentSupport />} />
            <Route path="/services/babysitting" element={<Babysitting />} />
            <Route path="/services/housekeeping" element={<Housekeeping />} />
            <Route path="/services/palliative-care" element={<PalliativeCare />} />
            <Route path="/services/respitecare" element={<RespiteCare />} />
            <Route path="/services/support-special-needs" element={<SpecialNeeds />} />
            <Route path="/services/dementia-care" element={<DementiaCare />} />
            <Route path="/services/meal-preparation" element={<MealPreparation />} />
            <Route path="/services/staffing" element={<Staffing />} />



            <Route path="/resources/cdhci" element={<CDHCI />} />
            <Route path="/resources/faq" element={<FAQ />} />
            <Route path="/resources/financial-aid" element={<FinancialAid />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/careers/apply/:jobId" element={<JobApplication />} />

          </Routes>
        </div>
        <Footer />
    </Router>
  );
};

export default App;
