import { CartProduct } from "@/app/product/[productId]/ProductDetails";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

type CartContextType = {
  cartTotalQuantity: number;
  cartProductsItems: CartProduct[] | null;
  handleAddProductToCart: (product: CartProduct) => void;
  handleRemoveProductFromCart: (product: CartProduct) => void;
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

  useEffect(() => {
    const cartItems: any = localStorage.getItem("cartProductsItems");
    const cartProducts: CartProduct[] | null = JSON.parse(cartItems);

    setCartProductsItems(cartProducts);
  }, []);

  const handleAddProductToCart = useCallback((product: CartProduct) => {
    setCartProductsItems((prev) => {
      let updatedCartProducts;

      if (prev) {
        updatedCartProducts = [...prev, product];
      } else {
        updatedCartProducts = [product];
      }

      toast.success("Produto adicionado ao carrinho");
      localStorage.setItem(
        "cartProductsItems",
        JSON.stringify(updatedCartProducts)
      );
      return updatedCartProducts;
    });
  }, []);

  const handleRemoveProductFromCart = useCallback(
    (product: CartProduct) => {
      if (cartProductsItems) {
        const filteredCartProducts = cartProductsItems.filter((item) => {
          return item.id !== product.id;
        });

        setCartProductsItems(filteredCartProducts);
        toast.success(`Produto ${product.name} removido do carrinho`);
        localStorage.setItem(
          "cartProductsItems",
          JSON.stringify(filteredCartProducts)
        );
      }
    },

    [cartProductsItems]
  );

  const value = {
    cartTotalQuantity,
    cartProductsItems,
    handleAddProductToCart,
    handleRemoveProductFromCart,
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
