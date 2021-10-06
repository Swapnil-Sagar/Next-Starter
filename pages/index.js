//Initial page: index page
//Head: used to store metadata

import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import NavBar from "../comps/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>User List | Home</title>
        <meta name="keywords" content="users" />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Lorem ipsum wakanda wakanda hilele</p>
      </div>
    </>
  );
}
