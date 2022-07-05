import { Grid } from "@mui/material";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
function Footer() {
  return (
    <Grid container className={styles.container}>
      <Grid md={3} lg={4} item className={styles.item}>
        <Image
          src="/images/bg.png"
          layout="fill"
          alt="Footer image"
          objectFit="cover"
        />
      </Grid>
      <Grid xs={12} sm={12} md={9} item lg={8} className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>THIS IS THE BEST PIZZA IN OUR CITY</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
            Government Colony, Chetana College
            <br />
            Mumbai, 400051
            <br />
            9820469283
          </p>
          <p className={styles.text}>
            Hill Road, Elco market
            <br />
            Mumbai, 400050
            <br />
            8484384848
          </p>
          <p className={styles.text}>
            Gujarat Society, Vile Parle
            <br />
            Mumbai, 400090
            <br />
            9822349283
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </Grid>
    </Grid>
  );
}

export default Footer;
