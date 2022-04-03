import styles from './intro.module.css'
import illustration from '../../assets/images/illustration-working.svg'

function Intro() {
  return (
    <article className={styles.intro}> 
      <div className={styles.infoCont}>
        <h1 className={styles.title}>
          More than just<br/>shorter links
        </h1>
        <p className={styles.text}>
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <button className={styles.btn}>Get Started</button>
      </div>
      <div className={styles.imgCont}>
        <img className={styles.illustration} src={illustration} alt="illustration intro" />
      </div>
    </article>
  )
}

export default Intro