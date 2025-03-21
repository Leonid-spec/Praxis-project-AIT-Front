import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import AdminPanel from './pages/AdminPanel/AdminPanel';

function App() {

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin-panel" element={<AdminPanel />} />
                    {/* <Route path="/contact" element={<Service />} />  */}
                    {/* <Route path="/contact" element={<Contact />} />  */}
                    {/* <Route path="/contact" element={<Contact />} />  */}
                </Routes>
            
            </Layout>
        </Router>
    );
}

export default App;
