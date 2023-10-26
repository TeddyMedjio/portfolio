import Head from "next/head";
import Besoindesite from "../components/Besoindesite";
import Headerwesite from "../components/Headerwebsite";
import Projects from "../components/Projects";
import Webdesign from "../components/Webdesign";
import Rendez from "../components/Rendez";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Webdesignpropo from "../components/Webdesignpropo";

const Website = () => {
  return (
    <div>
      <Head>
        <title>Website</title>
        <meta name="Website" content="Website" />
      </Head>
      <Headerwesite />
      <Webdesign />
      <Besoindesite />
      <Projects />
      <Webdesignpropo />
      <Faq />
      <Rendez />
      <Footer />
    </div>
  );
};

export default Website;
