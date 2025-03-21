import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout'; 
import Home from './pages/Home/Home'; 
import AppointmentForm from './pages/Appointment/AppointmentForm'; 
import Team from './pages/Team/Team';
import DoctorPage from './pages/Doctor/DoctorPage';




function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Добавляем маршрут для главной страницы */}
                    <Route path="/appointment" element={<AppointmentForm />} /> {/* Новый маршрут */}
                    <Route path="/team" element={<Team />} />
                    <Route path="/doctor/:id" element={<DoctorPage />} />


                    
                    {/* Добавляйте другие маршруты по мере необходимости */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
