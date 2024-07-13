import Container from "@/components/Shared/Container";
import Pagination from "@/components/Shared/Pagination";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { TProduct } from "@/types";
import { categories } from "../Home/Category/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const ProductPage = () => {
  const [page, setPage] = useState(0);

  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [filterData, setFilterData] = useState({});

  const { isLoading, data: products } = useGetAllProductsQuery({
    searchValue,
    filterData,
  });

  if (isLoading) {
    return <p>loading....</p>;
  }

  // pagination
  const totalPages = Math.ceil(products?.data?.length / 8);
  const pages = [...new Array(totalPages).fill(0)];

  //searching
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.searchField.value);
    console.log(searchValue);
  };

  // filter
  const handleFilter = (e) => {
    e.preventDefault();
    const sortBy = [];
    if (price) sortBy.push(`price:${price}`);
    if (rating) sortBy.push(`rating:${rating}`);
    setFilterData({ category, sortBy: sortBy.join(",") });
  };

  return (
    <div className="px-4">
      <Container>
        <h2 className="text-3xl font-heading font-semibold text-center mt-10 mb-16">
          Popular Plants
        </h2>
        {/* search and filtering */}
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center my-6">
          {/* search */}
          <div className="w-full">
            <form
              className="w-full flex lg:justify-end md:justify-center  items-center"
              onSubmit={handleSearch}
            >
              <input
                className="border p-2 px-3 md:w-60 w-full"
                type="text"
                name="searchField"
                id="searchField"
                placeholder="search product"
              />
              <button
                type="submit"
                className="bg-primary-gradient text-white font-semibold rounded-r-md p-2 px-4"
              >
                Search
              </button>
            </form>
          </div>
          {/* filtering */}
          <div className="w-full">
            <form
              onSubmit={handleFilter}
              className="flex flex-col lg:flex-row items-center gap-2 "
            >
              {/* category */}
              <Select onValueChange={(value) => setCategory(value)}>
                <SelectTrigger className="w-full md:w-80 lg:w-44">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories?.map((category) => (
                    <SelectItem key={category?.title} value={category?.title}>
                      {category?.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {/* Price */}
              <Select onValueChange={(value) => setPrice(value)}>
                <SelectTrigger className="w-full md:w-80 lg:w-44">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desc">High To Low</SelectItem>
                  <SelectItem value="asc">Low To High</SelectItem>
                </SelectContent>
              </Select>
              {/* rating */}
              <Select onValueChange={(value) => setRating(value)}>
                <SelectTrigger className="w-full md:w-80 lg:w-44">
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desc">High To Low</SelectItem>
                  <SelectItem value="asc">Low To High</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" className="bg-primary-gradient">
                Filter Product
              </Button>
            </form>
          </div>
        </div>
        {products?.data.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products?.data?.slice(0, 8).map((product: TProduct) => (
              <ProductCard key={product?._id} product={product} />
            ))}
          </div>
        ) : (
          <h2>No Data Found</h2>
        )}
        {/* pagination*/}
        <Pagination page={page} setPage={setPage} pages={pages} />
      </Container>
    </div>
  );
};

export default ProductPage;
