import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";
import Grid from "@mui/material/Grid";

function PizzaCard({ pizza }) {
  return (
    <Link href={`/product/${pizza._id}`} passHref>
      <Grid item xs={8} sm={4} md={4} lg={3} className={styles.pizza_card}>
        <Image src={pizza.img} alt="Pizza image" width="200" height="200" />
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${pizza.prices[0]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
      </Grid>
    </Link>
  );
}

export default PizzaCard;
