import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import AppointmentForm from './pages/Appointment/AppointmentForm';
import { ModalProvider } from './components/Modal/ModalContext';
import Modal from 'react-modal';
import AppointmentModal from './components/Modal/AppointmentModal';
import GlobalStyles from './styles/GlobalStyles';
import Team from './pages/Team/Team';
import DoctorDetails from './pages/PageDetails/DoctorDetails/DoctorDetails';

Modal.setAppElement('#root');

function App() {
  return (
    <ModalProvider>
      <AppointmentModal />
      <Router>
        <GlobalStyles />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={<AppointmentForm />} />

            <Route path="/team" element={<Team />} /> 
            <Route path="/doctor/:id" element={<DoctorDetails />} />
            
            <Route path="/admin-panel" element={<AdminPanel />} />
          </Routes>
        </Layout>
      </Router>
    </ModalProvider>
  );
}

export default App;
