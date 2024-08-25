"use client";

import { Product } from "@prisma/client";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { formatPrice } from "../../../../utils/format";
import Heading from "@/app/components/product/Heading";
import Status from "@/app/components/Status";
import {
  MdCached,
  MdClose,
  MdDelete,
  MdDone,
  MdRemoveRedEye,
} from "react-icons/md";
import ActionButton from "@/app/components/ActionButton";
import { useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { deleteObject, getStorage, ref } from "firebase/storage";
import firebaseApp from "../../../../libs/firebase";

interface ManageProductsClientProps {
  products: Product[];
}

const ManageProductsClient: React.FC<ManageProductsClientProps> = ({
  products,
}) => {
  const router = useRouter();
  const storage = getStorage(firebaseApp);

  let rows: any = [];

  if (products) {
    rows = products.map((product: Product) => {
      return {
        id: product.id,
        name: product.name,
        price: formatPrice(product.price),
        category: product.category,
        brand: product.brand,
        inStock: product.inStock,
        images: product.images,
      };
    });
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "name", headerName: "Nome", width: 220 },
    {
      field: "price",
      headerName: "Preço",
      width: 100,
      renderCell: (params: GridRenderCellParams<Product>) => {
        return (
          <div className="font-bold text-slate-800">{params.row.price}</div>
        );
      },
    },
    { field: "category", headerName: "Categoria", width: 120 },
    {
      field: "inStock",
      headerName: "Em Estoque",
      width: 150,
      renderCell: (params: GridRenderCellParams<Product>) => {
        return (
          <div>
            {params.row.inStock === true ? (
              <Status
                text="Em estoque"
                icon={MdDone}
                backgroundColor="bg-teal-200"
                color="text-teal-700"
              />
            ) : (
              <Status
                text="Fora de estoque"
                icon={MdClose}
                backgroundColor="bg-rose-200"
                color="text-rose-700"
              />
            )}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Ações",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex justify-between gap-4 w-full">
            <ActionButton
              icon={MdCached}
              onClick={() =>
                handleToggleStock(params.row.id, params.row.inStock)
              }
            />
            <ActionButton
              icon={MdDelete}
              onClick={() => handleDelete(params.row.id, params.row.images)}
            />
            <ActionButton icon={MdRemoveRedEye} onClick={() => {
              router.push(`product/${params.row.id}`)
            }} />
          </div>
        );
      },
    },
  ];

  const handleToggleStock = useCallback((id: string, inStock: boolean) => {
    axios
      .put("/api/product", {
        id,
        inStock: !inStock,
      })
      .then((res) => {
        toast.success("Produto atualizado com sucesso!");
        router.refresh();
      })
      .catch((err) => {
        toast.error("Erro ao atualizar produto!");
        console.log(err);
      });
  }, []);

  const handleDelete = useCallback(async (id: string, images: any[]) => {
    toast("Deletando o produto, aguarde...");

    const handleImageDelete = async () => {
      try {
        for (const item of images) {
          if (item.image) {
            const imageRef = ref(storage, item.image);
            await deleteObject(imageRef);
            console.log("Image deleted successfully", item.image);
          }
        }
      } catch (error) {
        return console.log("Deleting images error");
      }
    };

    await handleImageDelete();

    axios
      .delete(`/api/product/${id}`)
      .then((res) => {
        toast.success("Produto deletado!");
        router.refresh();
      })
      .catch((err) => {
        toast.error("Erro ao deletar produto!");
        console.log(err);
      });
  }, []);

  return (
    <div className="max-w-[1150px] m-auto text-x1">
      <div className="mb-4 mt-8">
        <Heading title="Gerenciar Produtos" center />
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

export default ManageProductsClient;
