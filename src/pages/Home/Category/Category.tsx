import Container from "@/components/Shared/Container";
import { categories } from "./utils";

const Category = () => {
  return (
    <div className="py-12">
      <Container>
        <h2 className="text-3xl font-heading font-semibold text-center mt-10 mb-16">
          Plant Categories
        </h2>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-4">
          {categories?.map((category) => (
            <div key={category?.title} className="col-span-1">
              <img
                className="h-64 w-full object-cover"
                src={category?.image}
                alt=""
              />
              <h3 className="text-lg font-title font-semibold text-center">
                {category?.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Category;
