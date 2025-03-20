import styles from "./services.module.css"


export default function Services() {
  return (
    <div className={styles.services}>
        <h1>Наши услуги</h1>
        <ul>
        <li>Терапивтические лечения</li>
        <li>Имплантация зубов </li>
        <li>Ортодонтия</li>
        <li>Отбеливание зубов</li>
        </ul>
    </div>
  )
}
