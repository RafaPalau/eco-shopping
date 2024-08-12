import { products } from "../../utils/products";
import Banner from "./components/Banner/Banner";
import Container from "./components/Container";
import Product from "./components/Product/Product";

export default function Home() {
  return (
    <div className="p-6">
      <Container>
        <div>
          <Banner />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product) => {
            return <Product data={product} key={product.id} />;
          })}
        </div>
      </Container>
    </div>
  );
}
