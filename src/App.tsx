import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import Team from "./pages/Team/Team";
import Service from "./pages/Service/Service";
import DoctorDetails from "./pages/PageDetails/DoctorDetails/DoctorDetails";
import ServiceDetails from "./pages/PageDetails/ServiceDetails/ServiceDetails";
import About from "./pages/About/About";
import ContactsPage from "./pages/Contacts/ContactsPage";
import { DoctorsProvider } from "./pages/AdminPanel/DoctorsContext"; // Подключаем глобальный контекст
import AppointmentPage from "./pages/AdminPanel/appointmentsPage/AppointmentPage";

function App() {
  return (
    <DoctorsProvider>
      {" "}
      {/* Оборачиваем всё приложение в провайдер */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/admin-panel/*" element={<AdminPanel />} />{" "}
          {/* Звёздочка для вложенных маршрутов */}
        </Routes>
      </Layout>
    </DoctorsProvider>
  );
}

export default App;
