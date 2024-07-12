import Footer from "@/components/Shared/Footer";
import ProductPage from "../Product/ProductPage";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ProductPage />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
