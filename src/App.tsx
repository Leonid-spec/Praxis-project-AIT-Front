
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <Router>
           
            <Routes>
                <Route path="/" element={<div>Hi Dental clinic! Check pull 2.0</div>} />
                
            </Routes>
        </Router>
    );
}

export default App;
