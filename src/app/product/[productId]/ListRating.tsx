"use client";

import Avatar from "@/app/components/Avatar";
import Heading from "@/app/components/product/Heading";
import { Rating } from "@mui/material";
import moment from "moment";

interface Props {
  product: any;
}

const ListRating: React.FC<Props> = ({ product }: Props) => {
  if(product.reviews.length === 0) return null
  return (
    <div>
      <Heading title="Avaliações desse produto" />
      <div className="text-sm mt-6">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id} className="max-w-[300px]">
                <div className="flex gap-2 items-center ">
                  <Avatar src={review.user.image} />

                  <div className="font-bold">{review.user.name}</div>

                  <div className="font-light">
                    {moment(review.createdAt).fromNow()}
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <Rating readOnly defaultValue={review.rating} />
                    <div className="ml-2">{review.comment}</div>
                    <hr className="mt-4 mb-4 border-slate-200" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListRating;
