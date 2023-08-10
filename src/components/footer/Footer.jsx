import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&#169;2023 SeaLion. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/facebook.png" width={15} className={styles.icon} height={15}/>
        <Image src="/youtube.png" width={15} className={styles.icon} height={15}/>
        <Image src="/twitter.png" width={15} className={styles.icon} height={15}/>
        <Image src="/instagram.png" width={15} className={styles.icon} height={15}/>
      </div>
    </div>
  )
}

export default Footer