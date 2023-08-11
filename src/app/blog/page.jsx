import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'


const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href={"/blog/testId"} className={styles.container} > 
      <div className={styles.imgContainer}>
        <Image src={"https://img.freepik.com/premium-photo/stone-chariot-hampi-vittala-temple-sunset_211251-1016.jpg?w=1800"} alt='' width={400} height={250} className={styles.image}/>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi repellendus expedita blanditiis labore quidem hic ab alias harum magni consectetur totam qui, quo voluptates tempora perferendis officia placeat minima.</p>
      </div>
      </Link>
      <Link href={"/blog/testId"} className={styles.container} > 
      <div className={styles.imgContainer}>
        <Image src={"https://img.freepik.com/premium-photo/stone-chariot-hampi-vittala-temple-sunset_211251-1016.jpg?w=1800"} alt='' width={400} height={250} className={styles.image}/>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi repellendus expedita blanditiis labore quidem hic ab alias harum magni consectetur totam qui, quo voluptates tempora perferendis officia placeat minima.</p>
      </div>
      </Link>
      <Link href={"/blog/testId"} className={styles.container} > 
      <div className={styles.imgContainer}>
        <Image src={"https://img.freepik.com/premium-photo/stone-chariot-hampi-vittala-temple-sunset_211251-1016.jpg?w=1800"} alt='' width={400} height={250} className={styles.image}/>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi repellendus expedita blanditiis labore quidem hic ab alias harum magni consectetur totam qui, quo voluptates tempora perferendis officia placeat minima.</p>
      </div>
      </Link>
      <Link href={"/blog/testId"} className={styles.container} > 
      <div className={styles.imgContainer}>
        <Image src={"https://img.freepik.com/premium-photo/stone-chariot-hampi-vittala-temple-sunset_211251-1016.jpg?w=1800"} alt='' width={400} height={250} className={styles.image}/>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi repellendus expedita blanditiis labore quidem hic ab alias harum magni consectetur totam qui, quo voluptates tempora perferendis officia placeat minima.</p>
      </div>
      </Link>
    </div>
  )
}

export default Blog