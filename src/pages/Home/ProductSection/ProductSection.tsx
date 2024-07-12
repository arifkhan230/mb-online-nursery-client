import Container from "@/components/Shared/Container";
import { Button } from "@/components/ui/button";
import ProductCard from "@/pages/Product/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const { isLoading, data: products } = useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <Container>
        <h2 className="text-3xl font-heading font-semibold text-center mt-10 mb-16">
          Popular Plants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products?.data.map((product: TProduct) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
        <div className=" flex items-center justify-center my-6">
          <Link to="/products">
            <Button className="bg-primary-gradient text-xl text-white">
              See All Product
              <FaArrowAltCircleRight className="ml-2 text-2xl" />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ProductSection;
