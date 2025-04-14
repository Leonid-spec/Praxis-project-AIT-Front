// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import AdminPanel from "./pages/AdminPanel/AdminPanelPage/AdminPanel";
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
import EditDoctorPage from "./pages/AdminPanel/Doctors/EditDoctor/EditDoctorPage"; // ✅ Импорт страницы редактирования врача

Modal.setAppElement("#root");

function App() {
  
  return (
    <ModalProvider>
      <AppointmentModal />
      {/* <HashRouter> */}
        <GlobalStyles />
        <Layout>
          <Routes>
            {/* Главная страница */}
            <Route path="/" element={<Home />} />

            {/* О враче */}
            <Route path="/team" element={<Team />} />
            <Route path="/doctor/:id" element={<DoctorDetails />} />

            {/* О компании */}
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />

            {/* Услуги */}
            <Route path="/services" element={<Service />} />
            <Route path="/service/:id" element={<ServiceDetails />} />

            {/* Админ-панель */}
            <Route path="/admin-panel/*" element={<AdminPanel />}> {/* ✅ Теперь EditDoctorPage загружается внутри */}
              <Route path="edit-doctor/:id" element={<EditDoctorPage />} /> 
            </Route>

            {/* 404 */}
            <Route path="*" element={<div>Page not found!</div>} />
          </Routes>
        </Layout>
      {/* </HashRouter> */}
    </ModalProvider>
  );
}

export default App;
