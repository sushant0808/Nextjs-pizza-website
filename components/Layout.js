import Footer from "./Footer";
import Navbar from "./Navbar";
import NewNavbar from "./NewNavbar";

function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <NewNavbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
