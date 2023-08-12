import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts",{
    cache:"no-store"
  });
  if (!res.ok) {
     throw new Error("Somethig went wrong on our side")
  }
  return res.json();
}

const Blog = async() => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {/* <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://img.freepik.com/premium-photo/stone-chariot-hampi-vittala-temple-sunset_211251-1016.jpg?w=1800"
            }
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>The Legend of Hampi</h1>
          <p className={styles.desc}>
            Hampi is an ancient village in the south Indian state of Karnataka.
            It’s dotted with numerous ruined temple complexes from the
            Vijayanagara Empire. On the south bank of the River Tungabhadra is
            the 7th-century Hindu Virupaksha Temple, near the revived Hampi
            Bazaar. A carved stone chariot stands in front of the huge Vittala
            Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to
            the Indian sloth bear.
          </p>
        </div>
      </Link>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://img.freepik.com/premium-photo/sun-temple-13th-century-unesco-world-heritage-site-konark-orissa-india_759575-2234.jpg?w=1800"
            }
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            How the wheels of the Sun Temple shows the time ?
          </h1>
          <p className={styles.desc}>
            The temple features 24 (12 pairs) wheels representing the wheels of
            Lord Surya's sun chariot. The 12 wheels signify the 12 months of the
            year and the 8 spokes represent the 8 prahars or time divisions of
            the day.
          </p>
        </div>
      </Link>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://img.freepik.com/premium-photo/kedarnath-india_78361-2503.jpg?w=1800"
            }
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            What is the story behind Kedarnath temple
          </h1>
          <p className={styles.desc}>
            Lord Shiva, who was being pursued by the Pandavas, took the form of
            a bull and disappeared into the ground at Kedarnath. The temple is
            believed to be built on the spot where Lord Shiva disappeared, and
            the lingam inside the temple is said to have been formed naturally
            by the elements of earth, air, water, and fire
          </p>
        </div>
      </Link> */}
      {data.map((item) => (
        <Link key={item._id} href={`/blog/${item._id}`} className={styles.container}>
          <div className={styles.imgContainer}>
            <Image
              src={item.img}
              alt="image"
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>
              {item.desc}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
