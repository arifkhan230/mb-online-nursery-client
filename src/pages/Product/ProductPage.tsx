import Container from "@/components/Shared/Container";
import Pagination from "@/components/Shared/Pagination";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { TProduct } from "@/types";

const ProductPage = () => {
  const [page, setPage] = useState(0);

  const { isLoading, data: products } = useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <p>loading....</p>;
  }

  const totalPages = Math.ceil(products?.data?.length / 8);

  const pages = [...new Array(totalPages).fill(0)];

  return (
    <div>
      <Container>
        <h2 className="text-3xl font-heading font-semibold text-center mt-10 mb-16">
          Popular Plants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.data?.slice(12).map((product: TProduct) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
        {/* pagination*/}
        <Pagination page={page} setPage={setPage} pages={pages} />
      </Container>
    </div>
  );
};

export default ProductPage;
