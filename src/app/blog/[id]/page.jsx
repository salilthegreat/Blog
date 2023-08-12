import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`,{
    cache:"no-store"
  });

  if (!res.ok) {
    return notFound()
  }
  return res.json();
}

//for dynamic pages generateMetadata() is used

export async function generateMetadata({params}){
  const page = await getData(params.id);
  return{
    title:page.title,
    description:page.desc
  }
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={
                "https://img.freepik.com/free-photo/businesswoman-talking-phone_23-2147636052.jpg?w=1800&t=st=1691732473~exp=1691733073~hmac=2620afd4834d1f97844f8eb186108e84d7e16272f26ca4cbb6355afc19b2adfe"
              }
              alt="postimage"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Jane Doe</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={
              data.img
            }
            alt="post image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
            {data.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
