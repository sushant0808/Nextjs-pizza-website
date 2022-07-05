import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import Link from "next/link";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href="/product/product">Products</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href="/contact">Contact</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link passHref href={`/cart`}>
                <div className={`${styles.item}`}>
                  <div className={`${styles.cart} ${styles.extra}`}>
                    <ShoppingCartIcon />
                    <div className={styles.counter}>{cartQuantity}</div>
                  </div>
                </div>
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon style={{ color: "white" }} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
