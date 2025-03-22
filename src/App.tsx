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
            <Route path="/team" element={<Team />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/appointment" element={<AppointmentForm />} />
          </Routes>
        </Layout>
      </Router>
    </ModalProvider>
  );
}

export default App;
