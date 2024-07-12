import { Button } from "@/components/ui/button";
import { TProduct } from "@/types";

const ProductCard = ({ product }: { product: TProduct }) => {
  const { image, price, rating, title } = product;
  return (
    <div className="bg-white shadow-sm rounded">
      <div>
        <img className="h-48 w-full object-contain" src={image} alt="" />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
        <p>Rating: {rating}</p>
        <p className="text-gray-600 font-semibold mb-1">${price}</p>
        <Button className="bg-primary-gradient">Add To Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
