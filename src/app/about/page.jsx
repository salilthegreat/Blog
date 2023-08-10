import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://img.freepik.com/free-photo/people-business-meeting-high-angle_23-2148911819.jpg?w=1800&t=st=1691666527~exp=1691667127~hmac=a3fce52cc4198f5bb95598783f00c4a2994d547bc60d6bbbbba7f83c8fbfd041"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            explicabo doloremque facere sunt at. Est at, assumenda quo
            blanditiis minus placeat necessitatibus quaerat architecto
            perferendis sunt ab, provident alias repudiandae? Totam accusantium
            corporis dolor repellendus, dolores repudiandae? Adipisci cum ea
            minus modi eligendi. Natus asperiores repellendus
            <br />
            <br />
            cupiditate perspiciatis dolore sed placeat praesentium consequuntur
            saepe explicabo, maxime iste perferendis, in fuga? Maiores similique
            at impedit soluta architecto libero, saepe magnam.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ratione magni ipsa laboriosam in molestias sint doloribus voluptatum
            facere consequatur. Officiis, suscipit! Sequi numquam quibusdam sunt
            eos labore, culpa quod.
            <br />
            Quas adipisci laborum labore mollitia autem nesciunt assumenda
            reprehenderit Nisi veniam.
            <br />- Dynamic Websites
            <br />
            <br /> - Fast And Handy Mobile Apps
            <br />
            <br />
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
