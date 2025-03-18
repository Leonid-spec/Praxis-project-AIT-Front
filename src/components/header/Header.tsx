import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
return (
<header className={styles.header}>
<h1>Zahnklinik</h1>
<nav>
<ul>
<li><Link to="/">О нашей клинике инфо</Link></li>
<li><Link to="/ services">Услуги</Link></li>
</ul>
</nav>
</header>
);
};

export default Header;