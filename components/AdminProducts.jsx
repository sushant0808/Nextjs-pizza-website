
import React from 'react'
import { useState } from "react";
import styles from "../styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";
import AddButton from './AddButton';

function AdminProducts({ products }) {
    const [pizzaList, setPizzaList] = useState(products);
    console.log(products);
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/products/${id}`);
            setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdate = async (id) => {
        try {
            await axios.put(`http://localhost:3000/api/products/${id}`, {});
            // setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <AddButton pizzaList={pizzaList} setPizzaList={setPizzaList}/>
            <div className={styles.container}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Products</h1>
                    <table className={styles.table}>
                        <tbody>
                            <tr className={styles.trTitle}>
                                <th>Image</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </tbody>
                        {pizzaList.map((product) => {
                            return (
                                <tbody key={product._id}>
                                    <tr className={styles.trTitle}>
                                        <td>
                                            <Image
                                                src={product.img}
                                                alt="Pizza image"
                                                width={50}
                                                height={50}
                                                objectFit="cover"
                                            />
                                        </td>
                                        <td>{product._id.slice(0, 5)}...</td>
                                        <td>{product.title}</td>
                                        <td>{product.prices[0]}</td>
                                        <td>
                                            <button className={styles.button} onClick={() => handleUpdate(product._id)}>Edit</button>
                                            <button
                                                className={styles.button}
                                                onClick={() => handleDelete(product._id)}
                                            >
                                                Delete
                    </button>
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                </div>
            </div>
        </>

    )
}

// export const getServerSideProps = async (ctx) => {
//     // Below before showing all the products and order lists to the admin, we are first checking if the admin is logged in by checking if there are any cookies available for the admin. If the cookies are available then we will match the cookies token with our stored token and if it matches then it is valid user and then show him all the products data and order lists. If there is no cookie available or token is incorrect then redirect user to the login page
//     const myCookie = ctx.req?.cookies || "";

//     if (myCookie.token !== process.env.TOKEN) {
//       return {
//         redirect: {
//           destination: "/admin/login",
//           permanent: false,
//         },
//       };
//     }
//     const productResponse = await axios.get("http://localhost:3000/api/products");
//     console.log(productResponse);
//     return {
//       props: {
//         products: productResponse.data,
//       },
//     };
//   };

export default AdminProducts
