import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import AdminPanel from "./pages/AdminPanel/AdminPanelPage/AdminPanel";
import AppointmentForm from "./pages/Appointment/AppointmentForm";
import { ModalProvider } from "./components/Modal/ModalContext";
import Modal from "react-modal";
import AppointmentModal from "./components/Modal/AppointmentModal";
import GlobalStyles from "./styles/GlobalStyles";
import Team from "./pages/Team/Team";
import Service from "./pages/Service/Service";
import DoctorDetails from "./pages/PageDetails/DoctorDetails/DoctorDetails";
import ServiceDetails from "./pages/PageDetails/ServiceDetails/ServiceDetails";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import { DoctorsProvider } from "./pages/AdminPanel/Doctors/DoctorsContext";
import AddAdminForm from "./pages/AdminPanel/AddAdmin/AddAdminForm";

Modal.setAppElement("#root");

function App() {
  return (
    <ModalProvider>
      <AppointmentModal />
       <DoctorsProvider>
         {" "}
        <Router>
          <GlobalStyles />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/appointment" element={<AppointmentForm />} />
              <Route path="/doctors" element={<Team />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/doctors/:id" element={<DoctorDetails />} />
              <Route path="/services" element={<Service />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route path="/admin-panel/*" element={<AdminPanel />} />{" "}
              <Route path="/admin-panel/add-admin" element={<AddAdminForm />} />
              
            </Routes>
          </Layout>
        </Router>
      </DoctorsProvider>
    </ModalProvider>
  );
}

export default App;
