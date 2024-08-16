"use client"
import { useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CheckoutClient = () => {
  const { cartProductsItems, paymentIntent, handleSetPaymentIntent } =
    useCart();
  const [ĺoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (cartProductsItems) {
      setLoading(true);
      setError(false);

      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartProductsItems,
          payment_intent_id: paymentIntent,
        }),
      })
        .then((res) => {
          setLoading(false);

          if (res.status === 401) {
            return router.push("/cart");
          }

          return res.json();
        })
        .then((data) => {
          setClientSecret(data.paymentIntent.client_secret);
          handleSetPaymentIntent(data.paymentIntent.id);
        })
        .catch((err) => {
          setError(true);
          toast.error("Alguma coisa deu errado");
        });
    }
  }, [cartProductsItems, paymentIntent]);

  return <div></div>;
};

export default CheckoutClient;
