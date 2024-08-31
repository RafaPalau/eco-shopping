"use client";

import Heading from "@/app/components/product/Heading";
import Status from "@/app/components/Status";
import { Order } from "@prisma/client";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";
import { formatPrice } from "../../../../utils/format";
import moment from "moment";
import OrderItem from "./OrderItem";

interface Props {
  order: Order;
}

const OrderDetail: React.FC<Props> = ({ order }) => {
  return (
    <div className="max-w-[1150px] m-auto flex flex-col gap-2 ">
      <div className="mt-8">
        <Heading title="Detalhes do pedido" center />
      </div>
      <div>ID do pedido: {order.id}</div>
      <div>
        Total de valor:{" "}
        <span className="font-bold">{formatPrice(order.amount)}</span>
      </div>

      <div className="flex gap-2 items-center">
        <div>Situação do Pagamento:</div>
        <div>
          {order.status === "pending" ? (
            <Status
              text="Pendente"
              icon={MdAccessTimeFilled}
              backgroundColor="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.status === "complete" ? (
            <Status
              text="Entregue"
              icon={MdDone}
              backgroundColor="bg-green-200"
              color="text-green-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div>Situação da Entrega:</div>
        <div>
          {order.deliveryStatus === "pending" ? (
            <Status
              text="Pendente"
              icon={MdAccessTimeFilled}
              backgroundColor="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.deliveryStatus === "dispatched" ? (
            <Status
              text="Enviado"
              icon={MdDeliveryDining}
              backgroundColor="bg-purple-200"
              color="text-purple-700"
            />
          ) : order.deliveryStatus === "delivered" ? (
            <Status
              text="Entregue"
              icon={MdDone}
              backgroundColor="bg-green-200"
              color="text-green-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>

      <div>Data: {moment(order.createDate).fromNow()}</div>
      <div>
        <h2 className="font-semibold mt-4 mb-2">Produtos</h2>
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
          <div className="col-span-2 justify-self-start">PRODUCTO</div>
          <div className=" justify-self-center">PREÇO</div>
          <div className=" justify-self-center">QUANTIDADE</div>
          <div className=" justify-self-end">TOTAL</div>
        </div>

        {order.products && order.products.map(item => {
          return <OrderItem key={order.id} item={item} ></OrderItem>
        })}
      </div>
    </div>
  );
};

export default OrderDetail;
