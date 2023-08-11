import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/Button/Button'
import Image from 'next/image'

const Category = ({params}) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url={"#"}/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src={"https://img.freepik.com/free-vector/programmer-concept-illustration_114360-3016.jpg?w=1060&t=st=1691729511~exp=1691730111~hmac=d59e3b807f65497d325ec833c30085b9382c0a42c2352916dcc9f650bb5603bf"} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url={"#"}/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src={"https://img.freepik.com/free-vector/programmer-concept-illustration_114360-3016.jpg?w=1060&t=st=1691729511~exp=1691730111~hmac=d59e3b807f65497d325ec833c30085b9382c0a42c2352916dcc9f650bb5603bf"} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url={"#"}/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src={"https://img.freepik.com/free-vector/programmer-concept-illustration_114360-3016.jpg?w=1060&t=st=1691729511~exp=1691730111~hmac=d59e3b807f65497d325ec833c30085b9382c0a42c2352916dcc9f650bb5603bf"} />
        </div>
      </div>
    </div>
  )
}

export default Category