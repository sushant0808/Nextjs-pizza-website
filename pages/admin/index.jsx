
import React from 'react'
import AdminDashboard from "../../components/AdminDashboard";
import axios from "axios";
function Index({orders,products}) {
  return (
    <div>
      <AdminDashboard orders={orders} products={products}/>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  // Below before showing all the products and order lists to the admin, we are first checking if the admin is logged in by checking if there are any cookies available for the admin. If the cookies are available then we will match the cookies token with our stored token and if it matches then it is valid user and then show him all the products data and order lists. If there is no cookie available or token is incorrect then redirect user to the login page
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
  const productResponse = await axios.get("http://localhost:3000/api/products");
  const orderResponse = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderResponse.data,
      products: productResponse.data,
    },
  };
};


export default Index
