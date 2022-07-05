import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addProduct } from "../../redux/cartSlice";
import { Grid } from "@mui/material";
function Product({ pizza }) {
  //                                                      S, M, L
  // This is the prices array is, pizza.prices = [12,13,14].
  // In the below code by default the pizza.prices[0] is 12. So when i click on medium size pizza it calls the handleSize function with the index 1. and inside that function pizza.prices[sizeIndex] i.e pizza.prices[1] will be 13 and pizza.prices[size] will be 12. Because size is the state variable and its value by default is 0 so pizza.prices[size] is pizza.prices[0] will give 12. Now inside this function we are removing the diff between thses two prices i.e 13 - 12 = 1. Then we are writing setPrice(sizeIndex) which is setPrice(1) in this case so that when next time ser clicks then the size state variable will have that value. The we are calling changePrice function. Now this function takes the difference i.e 1 in this case and adds it to the price.Now we have kept price as the state variable and its initial value is 12 or whatever the price of small size pizza will be. So we will add the price and the difference value i.e 12 + 1 = 13. And this new value will be set as the new price. By default pizza is 12 rs and if I want medium size pizza its prize is 13. But we are removing the diff and then ading it to the price.
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(pizza.prices[0]);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    // Here below if I check the extra options then its will add the current price plus the extra options price. For eg if my small size pizza price is 12 rs and if I add extra options like spicy sauce which costs 2 rs then this changePrice functin will add the current price plus the extra price i.e 12 + 2 = 14. If i uncheck the extra options checkbox then it will just subtract it 14 - 2 = 12.
    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(
        extras.filter((el) => {
          return el._id !== option.id;
        })
      );
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  };

  return (
    <Grid container className={styles.container}>
      <Grid xs={12} sm={12} md={5} lg={5} item className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} width="400" height="400" objectFit="contain" />
        </div>
      </Grid>
      <Grid xs={12} sm={12} md={7} lg={7} item className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/images/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/images/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/images/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) => {
            return (
              <div className={styles.option} key={option._id}>
                <input
                  type="checkbox"
                  id={option.text}
                  name={option.text}
                  className={styles.checkbox}
                  onChange={(e) => handleChange(e, option)}
                />
                <label htmlFor="double">{option.text}</label>
              </div>
            );
          })}
        </div>

        <div className={styles.add}>
          <input
            type="number"
            min="0"
            defaultValue={1}
            className={styles.quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to cart
          </button>
        </div>
      </Grid>
    </Grid>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
