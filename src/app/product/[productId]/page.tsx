import Container from "@/app/components/Container";

import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import getProductById from "../../../../actions/getProductById";

interface IParams {
  productId?: string;
}

const Product = async ({ params }: { params: IParams }) => {
  const product = await getProductById(params);

  if (!product) return <div>Produto não encontrado</div>;

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
