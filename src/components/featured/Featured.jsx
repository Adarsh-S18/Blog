import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <><div className={styles.container}>
      <h1 className={styles.title}><b>Hey, Sanuj here!</b> Discover my stories and creative ideas.</h1>
    </div>
    <div className={styles.post}>
    <div className={styles.imgContainer}>
    <Image src='/p1.jpeg' alt='' fill></Image>
    </div>
    <div className={styles.textContainer}>
    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet</h1>
    <p className={styles.postDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <button className={styles.button}>Read More</button>
    </div>
    </div>
    </>
  )
}

export default Featured
