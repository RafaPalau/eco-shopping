"use client";

import { CartContextProvider } from "../hooks/useCart";

interface Props {
  children: React.ReactNode;
}

const CartProvider: React.FC<Props> = ({ children }: Props) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default CartProvider;
