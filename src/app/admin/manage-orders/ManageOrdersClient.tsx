"use client";

import { Order, User } from "@prisma/client";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { formatPrice } from "../../../../utils/format";
import Heading from "@/app/components/product/Heading";
import Status from "@/app/components/Status";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone, MdRemoveRedEye } from "react-icons/md";
import ActionButton from "@/app/components/ActionButton";
import { useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import moment from "moment";

interface ManageOrdersClientProps {
  orders: ExtendedOrder[];
}

type ExtendedOrder = Order & {
  user: User;
};

const ManageOrdersClient: React.FC<ManageOrdersClientProps> = ({ orders }) => {
  const router = useRouter();
  let rows: any = [];

  if (orders) {
    rows = orders.map((order) => {
      return {
        id: order.id,
        customer: order.user.name,
        amount: formatPrice(order.amount / 100),
        paymentStatus: order.status,
        date: moment(order.createDate).fromNow(),
        deliveryStatus: order.deliveryStatus,
      };
    });
  }

  console.log(orders);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "customer", headerName: "Nome do Cliente", width: 130 },
    {
      field: "amount",
      headerName: "Valor",
      width: 130,
      renderCell: (params: GridRenderCellParams<Order>) => {
        return (
          <div className="font-bold text-slate-800">{params.row.amount}</div>
        );
      },
    },
    {
      field: "paymentStatus",
      headerName: "Status do pagamento",
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            {params.row.paymentStatus === "pendente" ? (
              <Status
                text="Pendente"
                icon={MdAccessTimeFilled}
                backgroundColor="bg-slate-200"
                color="text-slate-700"
              />
            ) : params.row.paymentStatus === "complete" ? (
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
        );
      },
    },
    {
      field: "deliverStatus",
      headerName: "Estado do envio",
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            {params.row.deliveryStatus === "pendente" ? (
              <Status
                text="Pendente"
                icon={MdAccessTimeFilled}
                backgroundColor="bg-slate-200"
                color="text-slate-700"
              />
            ) : params.row.deliveryStatus === "dispatched" ? (
              <Status
                text="dispatched"
                icon={MdDeliveryDining}
                backgroundColor="bg-purple-200"
                color="text-purple-700"
              />
            ) : params.row.deliveryStatus === "complete" ? (
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
        );
      },
    },
    {
      field: "date",
      headerName: "Data",
      width: 130,
    },
    {
      field: "action",
      headerName: "Ações",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex justify-between gap-4 w-full">
            <ActionButton
              icon={MdDeliveryDining}
              onClick={() => handleDispatch(params.row.id)}
            />
            <ActionButton
              icon={MdDone}
              onClick={() => handleDeliver(params.row.id)}
            />
            <ActionButton
              icon={MdRemoveRedEye}
              onClick={() => {
                router.push(`/order/${params.row.id}`);
              }}
            />
          </div>
        );
      },
    },
  ];

  const handleDispatch = useCallback((id: string) => {
    axios
      .put("/api/order", {
        id,
        deliveryStatus: "dispatched",
      })
      .then((res) => {
        toast.success("Envio enviado com sucesso!");
        router.refresh();
      })
      .catch((err) => {
        toast.error("Erro ao enviar envio!");
        console.log(err);
      });
  }, []);

  const handleDeliver = useCallback((id: string) => {
    axios
      .put("/api/order", {
        id,
        deliveryStatus: "complete",
      })
      .then((res) => {
        toast.success("Envio enviado com sucesso!");
        router.refresh();
      })
      .catch((err) => {
        toast.error("Erro ao enviar envio!");
        console.log(err);
      });
  }, []);

  return (
    <div className="max-w-[1150px] m-auto text-x1">
      <div className="mb-4 mt-8">
        <Heading title="Gerenciar Pedidos" center />
      </div>
      <div style={{ height: 600, width: "100%", justifyItems: "center" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 9 } },
          }}
          pageSizeOptions={[9, 20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ManageOrdersClient;
