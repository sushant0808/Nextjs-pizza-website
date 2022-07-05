import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
// https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa1FBRGNZdjVvMmdMcUsxdmVhdXFJWndoWndud3xBQ3Jtc0tua2ZnTkhiRk90WmVxWHpFd3lybGROdXc0aEJqQU1mMkllejZaZjNuN3Qtc21NbjYtc0Q2enBsN2lNeDh6NlRyLVRROGJyMXNzd180aUlETGNySnpMSGxJN0E2bGpoY2VQZ1FlbGlCRXVEU0QyU0FNOA&q=https%3A%2F%2Fgithub.com%2Fsafak%2Fyoutube%2Ftree%2Fnext-pizza-ui&v=vIxGDq1SPZQ
export default function Home({ pizzalist, admin }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza restaurant website</title>
        <meta name="description" content="Best pizza shop in mumbai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzalist={pizzalist} />
      {/* {!close && <Add setClose={setClose} pizzalist={pizzalist} />} */}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzalist: res.data,
      admin,
    },
  };
};
