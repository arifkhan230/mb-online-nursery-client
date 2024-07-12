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
    </div>
  );
};

export default Home;
