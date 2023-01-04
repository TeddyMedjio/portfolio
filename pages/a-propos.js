import Head from "next/head";
import Aboutheader from "../components/Aboutheader";
import Aboutsite from "../components/Aboutsite";
import Competence from "../components/Competence";
import Footer from "../components/Footer";
import Playlist from "../components/Playlist";
import Rendez from "../components/Rendez";

Head;

const Apropos = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="A propos" content="About" />
      </Head>
      <Aboutheader />
      <Aboutsite />
      <Playlist />
      <Competence />
      <Rendez />
      <Footer />
    </div>
  );
};

export default Apropos;
