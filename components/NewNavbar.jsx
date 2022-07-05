import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import Link from "next/link";
import DrawerComponent from "./Drawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(20),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function NewNavbar() {
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  const cartCount = useSelector((state) => state.cartCount);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky" style={{ background: "#373737" }}>
      <CssBaseline />
      <Toolbar style={{ display: "flex" }}>
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
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={styles.navbar}>
            <Link href="/" passHref className={styles.navbarLinks}>
              Home
            </Link>
            <Link
              href="/product/product"
              passHref
              className={styles.navbarLinks}
            >
              Product
            </Link>
            <Link href="/contact" passHref className={styles.navbarLinks}>
              Contact
            </Link>
            <Link passHref href={`/cart`}>
              <div className={styles.cartIcon}>
                <div className={`${styles.cart} ${styles.extra}`}>
                  <ShoppingCartIcon />
                  <div className={styles.counter}>{cartQuantity}</div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default NewNavbar;
