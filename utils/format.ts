export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

// TODO: Add logic to rating in another file

export const productRating = (data: any) => {
  const totalRating = data.reviews?.reduce(
    (acc: number, item: any) => item.rating + acc,
    0
  );
  return totalRating / data.reviews?.length;
};
