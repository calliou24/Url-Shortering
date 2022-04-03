import styles from './card.module.css'

function Card() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Boost your links Today</h2>
      <button className={styles.button}>Get Started</button>
    </div>
  )
}

export default Card