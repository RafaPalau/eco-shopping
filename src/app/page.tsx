export const revalidate = 0;

import getProducts from "../../actions/getProducts";
import Banner from "./components/banner/Banner";
import Container from "./components/Container";
import Product from "./components/product/Product";
import {IProductParams} from '../../actions/getProducts'
import NullData from "./components/NullData";

interface Props {
  searchParams: IProductParams
}

export default async function Home({ searchParams }: Props) {
  const products = await getProducts(searchParams);

  if(products.length === 0) {
    return <NullData title="Nenhum produto encontrado."></NullData>
  }


  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array
  }

  const shuffledProducts = shuffleArray(products)

  return (
    <div className="p-6">
      <Container>
        <div>
          <Banner />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {shuffledProducts.map((product: any) => {
            return <Product data={product} key={product.id} />;
          })}
        </div>
      </Container>
    </div>
  );
}
