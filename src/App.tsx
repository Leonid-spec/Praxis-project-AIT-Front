import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout'; // Предполагается, что компонент Layout находится в components
import Home from './pages/Home/Home'; // Импортируем компонент главной страницы
import AppointmentForm from './pages/Appointment/AppointmentForm'; // Импортируем компонент формы

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Добавляем маршрут для главной страницы */}
                    <Route path="/appointment" element={<AppointmentForm />} /> {/* Новый маршрут */}
                    {/* Добавляйте другие маршруты по мере необходимости */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
