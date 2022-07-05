import React, { useState } from "react";
import axios from "axios";
import styles from "../../styles/AllProduct.module.css";
import PizzaCard from "../../components/PizzaCard";
import { Grid } from "@mui/material";
function Product({ pizzalist }) {
  const [input, setInput] = useState("");
  const [allPizzas, setAllPizzas] = useState(pizzalist);

  const handleProducts = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/products", {
        title: input,
      });
      setAllPizzas(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.input}>
        <input
          type="text"
          placeholder="Enter pizza"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleProducts} className={styles.searchButton}>
          Search Pizza
        </button>
      </div> */}
      <Grid
        container
        columnGap={5}
        rowGap={5}
        style={{ justifyContent: "center", marginTop:"80px" }}
      >
        {allPizzas.map((pizza) => {
          return <PizzaCard pizza={pizza} />;
        })}
      </Grid>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzalist: res.data,
    },
  };
};

export default Product;
