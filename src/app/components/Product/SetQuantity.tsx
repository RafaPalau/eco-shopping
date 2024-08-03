"use client";

import { CartProduct } from "@/app/product/[productId]/ProductDetails";

interface Props {
  cartCounter?: boolean;
  cartProduct: CartProduct;
  handleQuantityIncrease: () => void;
  handleQuantityDecrease: () => void;
}

const buttonStyle =
  "border-[1.2px] border-slate-300 px-2 rounded cursor-pointer";

const SetQuantity: React.FC<Props> = ({
  cartProduct,
  handleQuantityIncrease,
  handleQuantityDecrease,
  cartCounter,
}: Props) => {
  console.log(cartProduct);
  return (
    <div className="flex gap-6 items-center">
      {cartCounter ? null : <div className="font-semibold">QUANTIDADE:</div>}
      <div className="flex gap-4 items-center text-base">
        <button className={buttonStyle} onClick={handleQuantityDecrease}>
          -
        </button>
        <div className="text-center">{cartProduct.quantity}</div>
        <button className={buttonStyle} onClick={handleQuantityIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
