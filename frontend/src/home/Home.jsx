import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Freebook from "../components/Freebook";
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Freebook />
        <Footer />
      </div>
    </>
  );
};
export default Home;
