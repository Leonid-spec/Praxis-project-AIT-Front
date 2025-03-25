import React from 'react';

const ContactsPage: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Заголовок */}
      <header style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <h1 style={{ textAlign: "left" }}>Unsere Kontakte</h1>
      </header>

      {/* Основной контент */}
      <main style={{ flex: 1, display: "flex", padding: "20px" }}>
        {/* Левый контейнер */}
        <div style={{ flex: 1, marginRight: "20px" }}>
          <h2>Adresse</h2>
          <p>DentalClinic, Albrecht-Dürer-Straße 10, 81543 München</p>
          
          <h2>Email</h2>
          <p>
            <a href="mailto:info@dentalclinic.de">info@dentalclinic.de</a>
          </p>
          
          <h2>Telefon</h2>
          <p>
            <a href="tel:+491234567890">+49 123 456 7890</a>
          </p>
        </div>

        {/* Правый контейнер */}
        <div style={{ flex: 1 }}>
          <h2>Unsere Karte</h2>
          {/* Встроенная Google-карта с конкретным адресом */}
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.577930682343!2d11.587207676366516!3d48.1093323792194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf31d5b7085f%3A0xd3a9396049ec4d54!2sAlbrecht-D%C3%BCrer-Stra%C3%9Fe%2010%2C%2081543%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2sus!4v1688561234567!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#f5f5f5", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Часы работы */}
        <section>
          <h2>Unsere Öffnungszeiten</h2>
          <p>Montag-Freitag: 08:00 - 12:00, 13:00 - 18:00 Uhr</p>
          <p>Samstag, Sonntag: geschlossen</p>
        </section>

        {/* Кнопка записи */}
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Termin Buchen
        </button>
      </footer>
    </div>
  );
};

export default ContactsPage;