import Container from "@/app/components/Container";
import ManageProductsClient from "./ManageProductsClient";
import getProducts from "../../../../actions/getProducts";
import { getCurrentUser } from "../../../../actions/getCurrentUser";
import NullData from "@/app/components/NullData";

const ManageProducts = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getCurrentUser();


  console.log(products)

  if (!currentUser || currentUser.role !== "ADMIN") {
    return (
      <NullData title="Desculpe, você não tem permissão para acessar esta página." />
    );
  }

  return (
    <div className="pt-8">
      <Container>
        <ManageProductsClient products={products} />
      </Container>
    </div>
  );
};

export default ManageProducts;
