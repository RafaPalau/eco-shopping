"use client";

import {
  PaymentElement,
  useElements,
  useStripe,
  AddressElement,
} from "@stripe/react-stripe-js";
import { useCart } from "../../../hooks/useCart";
import { formatPrice } from "../../../utils/format";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Heading from "../components/product/Heading";
import Button from "../components/product/Button";

interface Props {
  clientSecret: string;
  handleSetPaymentSuccess: (value: boolean) => void;
}

const handleSetPaymentSuccess = (value: boolean) => {
  console.log(value);
};

const CheckoutForm: React.FC<Props> = ({
  clientSecret,
  handleSetPaymentSuccess,
}: Props) => {
  const { cartTotalAmount, handleClearCart, handleSetPaymentIntent } =
    useCart();
  const stripe = useStripe();
  const elements = useElements();
  const formattedPrice = formatPrice(cartTotalAmount);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    if (!clientSecret) {
      return;
    }

    handleSetPaymentSuccess(false);
  }, [stripe]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    stripe
      .confirmPayment({
        elements,
        redirect: "if_required",
      })
      .then((result) => {
        if (!result.error) {
          toast.success("Pagamento realizado com sucesso!");

          handleClearCart();
          handleSetPaymentSuccess(true);
          handleSetPaymentIntent(null);
        }

        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} id="payment-form">
      <div className="mb-6">
        <Heading title="Entre com seus dados para finalizar o pagamento" />
      </div>
      <h2 className="font-semibold mb-2">Endereço</h2>
      <AddressElement
        options={{ mode: "shipping", allowedCountries: ["BR"] }}
      />
      <h2 className="font-semibold mt-4 mb-2">Informações de Pagamento</h2>
      <PaymentElement id="payment-element" options={{ layout: "tabs" }} />

      <div className="py-4 text-center text-slate-700 text-2xl font-bold">
        Total: {formattedPrice}
      </div>
      <Button
        label={isLoading ? "Finalizando Pagamento" : "Finalizar Pagamento"}
        disabled={isLoading || !stripe || !elements}
        onClick={() => {}}
      />
    </form>
  );
};

export default CheckoutForm;
