import { CartProduct } from "@/app/product/[productId]/ProductDetails";
import React, { createContext, useCallback, useContext, useState } from "react";

type CartContextType = {
  cartTotalQuantity: number;
  cartProductsItems: CartProduct[] | null;
  handleAddProductToCart: (product: CartProduct) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [cartProductsItems, setCartProductsItems] = useState<
    CartProduct[] | null
  >(null);

  const handleAddProductToCart = useCallback((product: CartProduct) => {
    setCartProductsItems((prev) => {
      let updatedCartProducts;

      if (prev) {
        updatedCartProducts = [...prev, product];
      } else {
        updatedCartProducts = [product];
      }

      return updatedCartProducts;
    });
  }, []);

  const value = {
    cartTotalQuantity,
    cartProductsItems,
    handleAddProductToCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
};
