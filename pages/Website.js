import Head from "next/head";
import Besoindesite from "../components/Besoindesite";
import Headerwesite from "../components/Headerwebsite";
import Projects from "../components/Projects";
import Webdesign from "../components/Webdesign";
import Rendez from "../components/Rendez";
import Footer from "../components/Footer";
import Webdesignpropo from "../components/Webdesignpropo";

const Website = () => {
  return (
    <div>
      <Head>
        <title>Website</title>
        <meta name="keywords" content="Website" />
      </Head>
      <Headerwesite />
      <Webdesign />
      <Besoindesite />
      <Projects />
      <Webdesignpropo />
      <Rendez />
      <Footer />
    </div>
  );
};

export default Website;
