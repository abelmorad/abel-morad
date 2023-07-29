import { Outlet } from "react-router";
import Landing from "../pages/Landing";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Root() {

  return (
    <>
      <Header />
      <Landing />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;