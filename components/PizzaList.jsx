import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
import Link from "next/link";
function PizzaList({ pizzalist }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia totam
        temporibus ipsam inventore corrupti dolores, velit voluptates. Saepe
        quas deserunt repellat, repellendus tenetur dignissimos iure quis omnis
        ex assumenda eligendi.
      </p>

      <Link href="/product/product" passHref>
        <button className={styles.buyPizzaBtn}>Buy Pizza</button>
      </Link>
    </div>
  );
}

export default PizzaList;
