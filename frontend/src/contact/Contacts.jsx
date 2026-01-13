import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

const Contacts = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Contacts;
