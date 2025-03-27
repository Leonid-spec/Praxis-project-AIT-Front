import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
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
// import ContactsPage from "./pages/Contacts/ContactsPage";
import Contacts from "./pages/Contacts/Contacts";
import Carousel from "./pages/About/Carousel";

Modal.setAppElement("#root");

function App() {
  return (
    <ModalProvider>
      {/* Модальное окно для записи на прием */}
      <AppointmentModal />
      <Router>
        <GlobalStyles />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={<AppointmentForm />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<Carousel />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/doctor/:id" element={<DoctorDetails />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
          </Routes>
        </Layout>
      </Router>
    </ModalProvider>
  );
}

export default App;