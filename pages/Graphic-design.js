import Head from "next/head";
import Communication from "../components/Communication";
import Designhead from "../components/Designhead";
import Faq from "../components/Faq";
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
      <Faq />
      <Rendez />
      <Footer />
    </div>
  );
};

export default Design;
