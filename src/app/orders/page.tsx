import Container from "@/app/components/Container";
import OrderClient from "./OrdersClient";

import NullData from "@/app/components/NullData";

import getOrdersByUserId from "../../../actions/getOrdersByUserId";
import { getCurrentUser } from "../../../actions/getCurrentUser";

const Order = async () => {
  const currentUser = await getCurrentUser();

 

  const orders = await getOrdersByUserId(currentUser!.id);

  if (!orders) {
    return (
      <NullData title="Nenhum pedido encontrado para este usuário." />
    );
  }

  return (
    <div className="pt-8">
      <Container>
        <OrderClient orders={orders} />
      </Container>
    </div>
  );
};

export default Order;
