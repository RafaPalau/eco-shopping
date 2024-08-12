"use client";
import Link from "next/link";
import { useCart } from "../../../hooks/useCart";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/product/Heading";
import Button from "../components/product/Button";
import ProductContent from "./ProductContent";


const CartClient = () => {
  const { cartProductsItems, handleClearCart , cartTotalAmount} = useCart();

  if (!cartProductsItems || cartProductsItems.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Seu carrinho está vazio</div>
        <div>
          <Link
            className="text-slate-500 flex items-center gap-2 mt-3 "
            href="/"
          >
            <MdArrowBack />
            <span>Continuar Comprando</span>
         

          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Heading title="Seu carrinho" center />
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
        <div className="col-span-2 justify-self-start">PRODUTO</div>
        <div className="justify-self-center">PREÇO</div>
        <div className="justify-self-center">QUANTIDADE</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>
        {cartProductsItems &&
          cartProductsItems.map((item) => {
            return <ProductContent key={item.id} item={item} />;
          })}
      </div>

      <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
        <div className="w-[100px]">
          <Button
            small
            outline
            label="Limpar Carrinho"
            onClick={() => handleClearCart()}
          />
        </div>

        <div className="text-sm flex flex-col gap-2 items-start">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>Subtotal</span>
            <span>R${cartTotalAmount.toFixed(2)}</span>
          </div>
          <p className="text-slate-400">
            Taxas e frete serão calculados na finalização
          </p>

          <Button
            label="Finalizar Compra"
            onClick={() => console.log("click")}
          />
          <Link
            className="text-slate-500 flex items-center gap-2 mt-3"
            href="/"
          >
            <MdArrowBack />
            <span>Continuar Comprando</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
