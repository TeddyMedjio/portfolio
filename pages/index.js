import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          N. Jean Claude - Freelance webdesigner & Graphique designer
        </title>
        <meta name="keywords" content="Graphique design, web developpement" />
      </Head>
      <Header />
    </div>
  );
}
