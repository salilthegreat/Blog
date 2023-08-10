import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Let's Keep in Touch</div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="https://img.freepik.com/free-vector/website-creator-concept-illustration_114360-3315.jpg?w=1060&t=st=1691673495~exp=1691674095~hmac=f096492ae4cb8fffabd971b6ad8bca5b9207470329ea863f071132158b759f8e" alt="" fill={true} className={styles.image} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input}/>
          <input type="text" placeholder="email" className={styles.input}/>
          <textarea className={styles.textArea} placeholder="message" cols={30} rows={10}></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
