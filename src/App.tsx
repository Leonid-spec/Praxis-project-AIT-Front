import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'; // Импорт компонента Layout
import Home from './pages/Home/Home'; // Главная страница
import AppointmentForm from './pages/Appointment/AppointmentForm'; // Форма записи

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Главная страница */}
                    <Route path="/appointment" element={<AppointmentForm />} /> {/* Форма записи */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
