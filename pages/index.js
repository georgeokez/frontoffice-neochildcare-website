import Head from "next/head";
import Mid from "../components/website/indexPage/Mid";
import RepairServices from "../components/website/indexPage/RepairServices";
import Affiliates from "../components/website/indexPage/Affiliates";
import Footer from "../components/website/common/Footer";
import Cards from "../components/website/indexPage/Cards";
import TopCarousel from "../components/website/indexPage/TopCarousel";
import MobileAppSec from "../components/website/indexPage/MobileAppSec";
import BottomCarousel from "../components/website/indexPage/BottomCarousel";
import Nav from "../components/website/common/Nav";
export default function Home() {
  return (
    <>
      <Head>
        <title>Neo Childcare | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <>
        <Nav />
        <TopCarousel />
        <Mid />
        {/* <Cards /> */}
        <RepairServices />
        <MobileAppSec />
        <Affiliates />
        <BottomCarousel />
        <Footer />
      </>
    </>
  );
}
