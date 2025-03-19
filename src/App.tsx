import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout'; // Предполагается, что компонент Layout находится в components

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    {/* <Route path="/" element={<div>Hi Dental clinic! Check pull 2.0</div>} /> */}
                    {/* Добавляйте другие маршруты по мере необходимости */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
