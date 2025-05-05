import React from "react";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router ,Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import SecurityPolicy from "./pages/Solution/SecurityPolicy.jsx";
import SecurityRisk from "./pages/Solution/SecurityRisk.jsx";
import SecurityControl from "./pages/Solution/SecurityControl.jsx";
import DataManagment from "./pages/Solution/DataManagment.jsx";
import AuditandRiskManagment from "./pages/Solution/AuditandRiskManagment.jsx";
import Monitoring from "./pages/Solution/Monitoring.jsx";
import AwarenessandTraining from "./pages/Solution/AwarenessandTraining.jsx";
import RegulartoryReporting from "./pages/Solution/RegulartoryReporting.jsx";
import Basic from "./pages/Plans/Basic.jsx";
import Standard from "./pages/Plans/Standard.jsx";
import Premium from "./pages/Plans/Premium.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Kaspersky from "./pages/Product/Kaspersky.jsx";
import Tenable from "./pages/Product/Tenable.jsx";
import Microsoft from "./pages/Product/Microsoft.jsx";
import Fortinet from "./pages/Product/Fortinet.jsx";
import TrendMicro from "./pages/Product/TrendMicro.jsx";




const DefaultLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const othereLayout = ({ children }) => <>{children}</>;

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
      <Route path="/services/security-policy-management-for-it-and-ot" element={<DefaultLayout><SecurityPolicy/></DefaultLayout>}/>
      <Route path="/services/security-controls-implementation-and-improvement/" element={<DefaultLayout><SecurityControl/></DefaultLayout>}/>
      <Route path="/services/security-risk-vulnerability-assessment" element={<DefaultLayout><SecurityRisk/></DefaultLayout>}/>
      <Route path="/services/data-management/" element={<DefaultLayout><DataManagment/></DefaultLayout>}/>
      <Route path="/services/audit-and-risk-assessment/" element={<DefaultLayout><AuditandRiskManagment/></DefaultLayout>}/>
      <Route path="/services/monitoring-and-incident-response/" element={<DefaultLayout><Monitoring/></DefaultLayout>}/>
      <Route path="/services/awareness-and-training/" element={<DefaultLayout><AwarenessandTraining/></DefaultLayout>}/>
      <Route path="/services/regulatory-reporting/" element={<DefaultLayout><RegulartoryReporting/></DefaultLayout>}/>
      <Route path="/basic" element={<DefaultLayout><Basic/></DefaultLayout>}/>
      <Route path="/standard" element={<DefaultLayout><Standard/></DefaultLayout>}/>
      <Route path="/premium" element={<DefaultLayout><Premium/></DefaultLayout>}/>
      <Route path="/contact-us" element={<DefaultLayout><Contact/></DefaultLayout>}/>
      <Route path="/tech-provider/kaspersky/" element={<DefaultLayout><Kaspersky/></DefaultLayout>}/>
      <Route path="/tech-provider/tenable/" element={<DefaultLayout><Tenable/></DefaultLayout>}/>
      <Route path="/tech-provider/microsoft/" element={<DefaultLayout><Microsoft/></DefaultLayout>}/>
      <Route path="/tech-provider/fortinet/" element={<DefaultLayout><Fortinet/></DefaultLayout>}/>
      <Route path="/tech-provider/trend-micro/" element={<DefaultLayout><TrendMicro/></DefaultLayout>}/>


      
    </Routes>
  </Router>
);

export default App;
