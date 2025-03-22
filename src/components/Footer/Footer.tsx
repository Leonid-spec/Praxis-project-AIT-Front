import MakeAppointmentBtn from "../Button/MakeAppointmentBtn/MakeAppointmentBtn";
import styles from "./footer.module.css"
import { useTranslation } from 'react-i18next';
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {

    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <img src="/src/public/logo.jpg" alt="Zahn" className={styles.logo} />
                </div>
                <div className={styles.kontakt}>
                    <h3>{t('message.footer.titles.contact')}</h3>
                    <div className={styles.adresse}>
                        <p>DentalClinic</p>
                        <p>MusterStrasse 10</p>
                        <p>12345 München</p>
                    </div>
                    <div className={styles.kontaktInfo}>
                        <p>  <FaPhone style={{ marginRight: "8px" }} />+49 017 223 334</p>
                        <p>  <FaEnvelope style={{ marginRight: "8px" }} />info@dentalclinic.de</p>
                    </div>
                </div>
                <div className={styles.sprechzeiten}>
                    <h3>{t('message.footer.titles.time')}</h3>
                    <div className={styles.daysOfWeek}>
                        <p>{t('message.footer.daysOfWeek.monday')}: 08:00 - 12:00, 13:00 - 18:00</p>
                        <p>{t('message.footer.daysOfWeek.tuesday')}: 08:00 - 12:00, 13:00 - 18:00</p>
                        <p>{t('message.footer.daysOfWeek.wednesday')}: 08:00 - 12:00, 13:00 - 18:00</p>
                        <p>{t('message.footer.daysOfWeek.thursday')}: 08:00 - 12:00, 13:00 - 18:00</p>
                        <p>{t('message.footer.daysOfWeek.friday')}: 08:00 - 12:00, 13:00 - 18:00</p>
                    </div >
                    <MakeAppointmentBtn text={t('message.main.use_oft.button.title')}/>
                </div>
            </div>
        </footer>
    );
};


export default Footer;