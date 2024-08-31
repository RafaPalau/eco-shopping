/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Rating } from "@mui/material";
import { productRating } from "../../../../utils/format";
import { useCallback, useEffect, useState } from "react";
import SetColor from "@/app/components/product/SetColor";
import SetQuantity from "@/app/components/product/SetQuantity";
import Button from "@/app/components/product/Button";
import ProductImage from "@/app/components/product/ProductImage";
import { useCart } from "../../../../hooks/useCart";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";

interface IProduct {
  product: any;
}

export type CartProduct = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
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
  const { handleAddProductToCart, cartProductsItems } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);

  const [cardProduct, setCartProduct] = useState<CartProduct>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImage: { ...product.images[0] },
    quantity: product.quantity || 1,
    price: product.price,
  });

  const router = useRouter();

  useEffect(() => {
    setIsProductInCart(false);

    if (cartProductsItems) {
      const existingIndex = cartProductsItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProductsItems]);

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

  const handleQuantityIncrease = useCallback(() => {
    if (cardProduct.quantity === 99) {
      return; 
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [cardProduct]);

  const handleQuantityDecrease = useCallback(() => {
    setCartProduct((prev) => {
      if (prev.quantity <= 1) {
        return prev; 
      }

      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, []);


  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 
    gap-12"
    >
      <ProductImage
        cartProduct={cardProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />

      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating readOnly defaultValue={productRating(product)} />
          <div>
            {product.reviews?.length}{" "}
            {product.reviews?.length < 2 ? " avaliação" : "avaliações"}
          </div>
        </div>
        <hr className="border-slate-200 w-full" />
        <div className="text-justify">{product.description}</div>
        <hr className="border-slate-200 w-full mb-3 mt-3" />
        <div>
          <span className="font-bold">CATEGORIA:</span> {product.category}
        </div>
        <div>
          <span className="font-bold">MARCA: </span>
          {product.brand}
        </div>
        <div className={product.inStock ? "text-teal-600" : "text-rose-500"}>
          {product.inStock ? "Disponível" : "Indisponível"}
          <hr className="border-slate-200 w-full mb-3 mt-3" />
        </div>

        {isProductInCart ? (
          <>
            <p className="mb-3 text-slate-500 flex items-center gap-2">
              <MdCheckCircle size={30} className="text-teal-400" />
              <span>Produto adicionado ao carrinho</span>
            </p>
            <div className="max-w-sm">
              <Button
                label="Ir para carrinho"
                outline
                onClick={() => {
                  router.push("/cart");
                }}
              />
            </div>
          </>
        ) : (
          <>
            {" "}
            <SetColor
              cartProduct={product}
              images={product.images}
              handColorSelect={handleColorSelect}
            />
            <SetQuantity
              cartProduct={cardProduct}
              handleQuantityIncrease={handleQuantityIncrease}
              handleQuantityDecrease={handleQuantityDecrease}
              cartCounter={product.quantity}
            />
            <hr className="border-slate-200 w-full mb-3 mt-3" />
            <Button
              small
              label="Adicionar ao carrinho"
              onClick={() => handleAddProductToCart(cardProduct)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
