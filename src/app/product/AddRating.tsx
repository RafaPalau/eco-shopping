"use client";

import { Order, Product, Review } from "@prisma/client";
import { SafeUser } from "../../../types";
import React from "react";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../components/product/Heading";
import { Rating } from "@mui/material";
import { productRating } from "../../../utils/format";
import Input from "../components/inputs/Input";
import Button from "../components/product/Button";
import toast from "react-hot-toast";
import axios from "axios";

interface IProps {
  product: Product & {
    reviews: Review[];
  };
  user:
    | (SafeUser & {
        orders: Order[];
      })
    | null;
}

const AddRating: React.FC<IProps> = ({ product, user }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const route = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      comment: "",
      rating: 0,
    },
  });

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldTouch: true,
      shouldDirty: true,
      shouldValidate: true,
    });
  };
  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    setIsLoading(true);
    if (data.rating === 0) {
      setIsLoading(false);
      return toast.error("Você deve avaliar o produto.");
    }

    const ratingData = { ...data, userId: user?.id, product: product };

    axios
      .post("/api/rating", ratingData)
      .then(() => {
        toast.success("Avaliação enviada com sucesso!");
        route.refresh();
        reset();
      })
      .catch((error) => {
        toast.error("Erro ao enviar avaliação!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (!user || !product) return null;

  const deliveredOrder = user?.orders.some(
    (order) =>
      order.products.find((item) => item.id === product.id) &&
      order.deliveryStatus === "complete"
  );

  console.log(deliveredOrder, 'deliveredOrder')

  const userReview = product?.reviews.find((review: Review) => {
    return review.userId === user.id;
  });

  if (userReview || !deliveredOrder) return null;

  return (
    <div className="flex flex-col gap-2 max-w-[500px]">
      <Heading title="Adicionar avaliação" />
      <Rating
        onChange={(event, newValue) => {
          setCustomValue("rating", newValue);
        }}
      />

      <Input
        id="comment"
        label="Comentário"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Button
        label={isLoading ? "Enviando..." : "Enviar"}
        onClick={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default AddRating;
