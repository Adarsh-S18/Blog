import Menu from '@/components/menu/Menu'
import styles from './singlePage.module.css'
import Image from 'next/image'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
      <div className={styles.textContainer}>
        <h1>HJDABDHJBDA ASDJHBDHJBJHASB DSAD</h1>
        <div className={styles.user}>
            <div className={styles.userImageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
            </div>
            <div className={styles.userTextContainer}>
                <span className={styles.userTextContainer}>John Doe</span>
                <span className={styles.date}>01.01.2022</span>
            </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
        </div>
        </div>
      <div className={styles.content}>
      <div className={styles.post}>
        <div className={styles.description}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus quibusdam, asperiores nam voluptates praesentium dolor vitae officia impedit, facere, veritatis nesciunt itaque illum fugit amet iure placeat consequuntur debitis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus quibusdam, asperiores nam voluptates praesentium dolor vitae officia impedit, facere, veritatis nesciunt itaque illum fugit amet iure placeat consequuntur debitis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus quibusdam, asperiores nam voluptates praesentium dolor vitae officia impedit, facere, veritatis nesciunt itaque illum fugit amet iure placeat consequuntur debitis?</p>
        </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
