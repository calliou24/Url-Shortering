
import styles from './stadistics.module.css'

//icon Imagesy
import Brand from '../../assets/images/icon-brand-recognition.svg'
import Detailed from '../../assets/images/icon-detailed-records.svg'
import Fully from '../../assets/images/icon-fully-customizable.svg'

const cardsData = [
  {
    id: 'brand',
    icon : Brand,
    title: 'Brand Recognition',
    text : "Boost your brand recognition with each click. Generic link don't mean a thing. Branded link help instil confidence in your content."
  },
  {
    id: 'detailed',
    icon : Detailed,
    title: 'Detailed Records',
    text : "Gain insights into who is clicking your links. Knowing when adn where people engage with your contetn helps inform better decisions."
  },
  {
    id: 'fully',
    icon : Fully,
    title: 'Fullly Customizable',
    text : "Improve brand awareness and content discoverability through customizable links. supercharging audience engagement."
  }
]

function Stadistics() {
  return (
    <article className={styles.stadistics}>
      <div className={styles.stadisticsDescription}>
        <h2 className={styles.title}>Advanced Stadistics</h2>
        <p className={styles.description}>Track how your links are performing across the web with our advanced stadistics dashboard</p>
      </div>
      <div className={styles.cardCont}>
        {cardsData.map(({id, icon, title, text}) => (
          <div id={id} key={id} className={styles.card}>  
            <div className={styles.iconCont}>
              <img className={styles.cardIcon} src={icon} alt={`${title} Icon`}/>
            </div>
            <div className={styles.titleCard}>{title}</div>
            <p className={styles.text}>{text}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

export default Stadistics