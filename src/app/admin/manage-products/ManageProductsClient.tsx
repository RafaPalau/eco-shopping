"use client";

import { Product } from "@prisma/client";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { formatPrice } from "../../../../utils/format";
import Heading from "@/app/components/product/Heading";
import Status from "@/app/components/Status";
import { MdClose, MdDone } from "react-icons/md";

interface ManageProductsClientProps {
  products: Product[];
}

const ManageProductsClient: React.FC<ManageProductsClientProps> = ({
  products,
}) => {
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
      renderCell: () => {
        return <div>Ação</div>;
      },
    },
  ];

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
        />
      </div>
    </div>
  );
};

export default ManageProductsClient;
