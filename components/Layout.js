import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar /> <div>{children}</div>
    </>
  );
};

export default Layout;
