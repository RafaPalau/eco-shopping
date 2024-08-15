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
  cartTotalAmount: number;
  handleAddProductToCart: (product: CartProduct) => void;
  handleRemoveProductFromCart: (product: CartProduct) => void;
  handleCartQuantityIncrease: (product: CartProduct) => void;
  handleCartQuantityDecrease: (product: CartProduct) => void;
  handleClearCart: () => void;
  paymentIntent: string | null;
  handleSetPaymentIntent: (paymentIntent: string | null) => void;
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
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [paymentIntent, setPaymentIntent] = useState<string | null>(null);

  useEffect(() => {
    const cartItems: any = localStorage.getItem("cartProductsItems");
    const cartProducts: CartProduct[] | null = JSON.parse(cartItems);
    const ecoShoppingIntent: any = localStorage.getItem("ecoShoppingIntent");
    const paymentIntent: string | null = JSON.parse(ecoShoppingIntent);

    setCartProductsItems(cartProducts);
    setPaymentIntent(paymentIntent);
  }, []);

  useEffect(() => {
    const getTotals = () => {
      if (cartProductsItems) {
        const { total, quantity } = cartProductsItems?.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.quantity;

            acc.total += itemTotal;
            acc.quantity += item.quantity;

            return acc;
          },
          {
            total: 0,
            quantity: 0,
          }
        );

        setCartTotalQuantity(quantity);
        setCartTotalAmount(total);
      }
    };

    getTotals();
  }, [cartProductsItems]);

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

  const handleCartQuantityIncrease = useCallback(
    (product: CartProduct) => {
      let updatedCartProducts;

      if (product.quantity === 99) {
        toast.error("Você adicionou o limite de quantidade permitido");
        return;
      }

      if (cartProductsItems) {
        updatedCartProducts = [...cartProductsItems];

        const existingIndex = cartProductsItems.findIndex(
          (item) => item.id === product.id
        );

        if (existingIndex > -1) {
          updatedCartProducts[existingIndex].quantity = ++updatedCartProducts[
            existingIndex
          ].quantity;
        }

        setCartProductsItems(updatedCartProducts);

        localStorage.setItem(
          "ecoShoppingCart",
          JSON.stringify(updatedCartProducts)
        );
      }
    },
    [cartProductsItems]
  );

  const handleCartQuantityDecrease = useCallback(
    (product: CartProduct) => {
      if (product.quantity === 1) {
        toast.error("Você não pode remover mais do que 1 item");
        return;
      }

      let updatedCartProducts;

      if (cartProductsItems) {
        updatedCartProducts = [...cartProductsItems];

        const existingIndex = cartProductsItems.findIndex(
          (item) => item.id === product.id
        );

        if (existingIndex > -1) {
          updatedCartProducts[existingIndex].quantity = --updatedCartProducts[
            existingIndex
          ].quantity;
        }

        setCartProductsItems(updatedCartProducts);

        localStorage.setItem(
          "ecoShoppingCart",
          JSON.stringify(updatedCartProducts)
        );
      }
    },
    [cartProductsItems]
  );

  const handleClearCart = useCallback(() => {
    setCartProductsItems(null);
    setCartTotalQuantity(0);
    localStorage.setItem("ecoShoppingCart", JSON.stringify(null));
    toast.success("Seu carrinho está vazio");
  }, []);

  const handleSetPaymentIntent = useCallback((paymentIntent: string | null) => {
    setPaymentIntent(paymentIntent);
    localStorage.setItem("ecoShoppingIntent", JSON.stringify(paymentIntent));
  }, []);

  const value = {
    cartTotalQuantity,
    cartProductsItems,
    cartTotalAmount,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQuantityIncrease,
    handleCartQuantityDecrease,
    handleClearCart,
    paymentIntent,
    handleSetPaymentIntent,
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
