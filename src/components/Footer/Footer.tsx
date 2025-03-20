import MakeAppointmentBtn from "../Button/MakeAppointmentBtn/MakeAppointmentBtn";
import styles from "./footer.module.css"


const Footer: React.FC = () => {
    const handleButtonClick = () =>{
        console.log("Button clicked!");
        
    }
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <img src="/src/public/logo.jpg" alt="Zahn" className={styles.logo} />
                </div>
                <div className={styles.kontakt}>
                    <h3>KONTAKT</h3>
                    <p>DentalClinic</p>
                    <p>MusterStrasse 10</p>
                    <p>12345 München</p>
                    <p> <img src="/src/public/png-transparent-computer-icons-m.png" alt="phone" className={styles.icon} />+49 017 223 334</p>
                    <p> <img src="/src/public/pngtree-email-icon-png-image_506.png" alt="email" className={styles.icon} />info@dentalclinic.de</p>
                </div>
                <div className={styles.sprechzeiten}>
                    <h3>SPRECHZEITEN</h3>
                    <p>Montag: 08:00 - 12:00, 13:00 - 18:00 Uhr</p>
                    <p>Dienstag: 08:00 - 12:00, 13:00 - 18:00 Uhr</p>
                    <p>Mittwoch: 08:00 - 12:00, 13:00 - 18:00 Uhr</p>
                    <p>Donnerstag: 08:00 - 12:00, 13:00 - 18:00 Uhr</p>
                    <p>Freitag: 08:00 - 12:00, 13:00 - 18:00 Uhr</p>
                    <MakeAppointmentBtn text="Termin Buchen" onClick={handleButtonClick}/>
                </div>
            </div>
        </footer>
    );
};


export default Footer;