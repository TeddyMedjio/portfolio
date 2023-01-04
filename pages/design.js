import Head from "next/head";
import Communication from "../components/Communication";
import Designhead from "../components/Designhead";
import Footer from "../components/Footer";
import Identite from "../components/Identite";
import Rendez from "../components/Rendez";
import Temoignage from "../components/Temoignage";

const Design = () => {
  return (
    <div>
      <Head>
        <title>Graphic-design</title>
        <meta name="keywords" content="Design-graphic" />
      </Head>
      <Designhead />
      <Identite />
      <Communication />
      <Temoignage />
      <Rendez />
      <Footer />
    </div>
  );
};

export default Design;
