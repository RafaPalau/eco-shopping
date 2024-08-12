import React from "react";
import { CartProduct } from "../product/[productId]/ProductDetails";
import { formatPrice } from "../../../utils/format";
import Link from "next/link";
import { truncate } from "lodash";
import Image from "next/image";
import SetQuantity from "../components/product/SetQuantity";
import { useCart } from "../../../hooks/useCart";

interface Props {
  item: CartProduct;
}

const ProductContent: React.FC<Props> = ({ item }) => {
  const { handleRemoveProductFromCart, handleCartQuantityIncrease, handleCartQuantityDecrease } = useCart();

  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center">
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
        <Link href={`/product/${item.id}`}>
          <div className="relative w-[70px] aspect-square">
            <Image
              src={item.selectedImage.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>
            {truncate(item.name, { length: 20 })}
          </Link>
          <div>{item.selectedImage.color}</div>
          <div className="w-[70px]">
            <button onClick={() => handleRemoveProductFromCart(item)} className="text-slate-500 underline">
              Remover
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center">{formatPrice(item.price)}</div>
      <div className="justify-self-center">
        <SetQuantity
          cartCounter={true}
          cartProduct={item}
          handleQuantityIncrease={() => handleCartQuantityIncrease(item)}
          handleQuantityDecrease={() => handleCartQuantityDecrease(item)}
        />
      </div>
      <div className="justify-self-end font-semibold">
       {formatPrice(item.price * item.quantity) }
      </div>
    </div>
  );
};

export default ProductContent;
