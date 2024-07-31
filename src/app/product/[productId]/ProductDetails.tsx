"use client";

import { Rating } from "@mui/material";
import { productRating } from "../../../../utils/format";
import { useCallback, useState } from "react";
import SetColor from "@/app/components/Product/SetColor";

interface IProduct {
  product: any;
}

export type CartProduct = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  inStock: boolean;
  color: string;
  selectedImage: selectedImage;
  quantity: number;
  price: number;
};

export type selectedImage = {
  color: string;
  colorCode: string;
  image: string;
};

const ProductDetails: React.FC<IProduct> = ({ product }: IProduct) => {
  const [cardProduct, setCartProduct] = useState<CartProduct>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    inStock: product.inStock,
    color: product.color,
    selectedImage: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  const handleColorSelect = useCallback(
    (value: selectedImage) => {
      setCartProduct((prev) => {
        return {
          ...prev,
          selectedImage: value,
        };
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cardProduct.selectedImage]
  );

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 
    gap-12"
    >
      <div>Imagens</div>

      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating readOnly defaultValue={productRating(product)} />
          <div>
            {product.reviews?.length}{" "}
            {product.reviews?.length < 2 ? "avaliação" : "avaliações"}
          </div>
        </div>
        <hr className="border-slate-200 w-full" />
        <div className="text-justify">{product.description}</div>
        <hr className="border-slate-200 w-full" />
        <div>
          <span className="font-bold">CATEGORIA:</span> {product.category}
        </div>
        <div>
          <span className="font-bold">MARCA: </span>
          {product.brand}
        </div>
        <div className={product.inStock ? "text-teal-600" : "text-rose-500"}>
          {product.inStock ? "Disponível" : "Indisponível"}
          <hr className="border-slate-200 w-full" />
        </div>

        <SetColor
          cartProduct={product}
          images={product.images}
          handColorSelect={handleColorSelect}
        />

        {product.quantity && (
          <div>
            <hr className="border-slate-200 w-full" />
            <div>Quantidade: {product.quantity}</div>
            <hr className="border-slate-200 w-full" />
          </div>
        )}

        <div>Adicionar ao carrinho</div>
      </div>
    </div>
  );
};

export default ProductDetails;
