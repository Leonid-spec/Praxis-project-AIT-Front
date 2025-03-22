import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import GlobalStyles from "./styles/GlobalStyles";
import AppointmentForm from "./pages/Appointment/AppointmentForm";
import { ModalProvider } from "./components/Modal/ModalContext";
import Modal from "react-modal";
import AppointmentModal from "./components/Modal/AppointmentModal";

Modal.setAppElement("#root");

function App() {
  return (
    <ModalProvider>
      <AppointmentModal />
      <Router>
        <GlobalStyles />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/appointment" element={<AppointmentForm />} />
          </Routes>
        </Layout>
      </Router>
    </ModalProvider>
  );
}

export default App;
