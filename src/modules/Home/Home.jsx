import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import ChartSection from "./ChartSection";
import Course from "./Course";
import OurSuccess from "./OurSuccess";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <ChartSection />
      <OurSuccess />

      {/* <Course /> */}

      <Footer />
    </>
  );
};

export default Home;
