import styles from "../styles/Featured.module.css";
import { useState } from "react";
import Image from "next/image";
function Featured() {
  const [index, setIndex] = useState(0);
  const images = [
    "/images/slider_img_1.webp",
    "/images/slide_img_2.jpg",
    "/images/slide_img_3.webp",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }

    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/images/arrowl.png"
          alt="Slider arrow image"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translate(${-100 * index}vw)` }}
      >
        {images.map((img, index) => {
          return (
            <div className={styles.imgContainer} key={index}>
              <Image
                src={img}
                width="100vw"
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
          );
        })}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/images/arrowr.png"
          alt="Slider arrow image"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default Featured;
