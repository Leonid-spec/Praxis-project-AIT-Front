import About from "./components/about/About"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/services/Services";


function App() {

  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/ services" element={<Services />} />
    </Routes>
    <Footer/>
    </Router>
  )
}

export default App
