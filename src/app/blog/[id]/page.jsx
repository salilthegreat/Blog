import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    cache:"no-store"
  });

  if (!res.ok) {
    return notFound()
  }
  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
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
              "https://img.freepik.com/premium-photo/stone-chariot-hampi-vittala-temple-sunset_211251-1016.jpg?w=1800"
            }
            alt="post image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, nemo
          esse? Culpa vero in maiores quo nam eos molestiae, numquam consectetur
          architecto saepe laborum ipsam illo repellat provident deleniti iusto?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          magnam laudantium accusantium minima odio, quas dignissimos explicabo,
          sed fuga dolore nulla minus perspiciatis voluptas a alias voluptatem,
          eaque vel quam! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Qui, error? Optio soluta deleniti dignissimos quas ipsum odio!
          Voluptates ratione illo adipisci ipsum, voluptatibus excepturi
          officia, consectetur vitae sed libero repellat!
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id aut quo
          mollitia earum? At vero molestiae odio quibusdam, illum eligendi,
          minima eaque amet quidem sit id sequi cupiditate consectetur labore?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
