import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
function Navbar() {
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/images/telephone.png"
            alt="Telephone image"
            width="32"
            height="32"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>9820469283</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref className={styles.navLink}>
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link href="/product/product" passHref className={styles.navLink}>
            <li className={styles.listItem}>Products</li>
          </Link>
          <Link href="/contact" passHref className={styles.navLink}>
            <li className={styles.listItem}>Contact</li>
          </Link>

        </ul>
      </div>
      <Link passHref href={`/cart`}>
        <div className={`${styles.item}`}>
          <div className={`${styles.cart} ${styles.extra}`}>
            <Image
              src="/images/cart.png"
              alt="Cart logo"
              width="30px"
              height="30px"
            ></Image>
            <div className={styles.counter}>{cartQuantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
