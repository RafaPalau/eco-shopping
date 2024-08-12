"use client";

import {
  CartProduct,
  selectedImage,
} from "@/app/product/[productId]/ProductDetails";
import React from "react";

interface Props {
  images: selectedImage[];
  cartProduct: CartProduct;
  handColorSelect: (value: selectedImage) => void;
}

const SetColor: React.FC<Props> = ({
  images,
  cartProduct,
  handColorSelect,
}) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <span className="font-semibold">COR: </span>
        <div className="flex gap-2">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                onClick={() => handColorSelect(image)}
                className={`
              h-7 w-7 rounded-full border-teal-300 flex items-center justify-center
              ${
                cartProduct.selectedImage?.color === image.color
                  ? "border-teal-500"
                  : "border-none"
              }
              `}
              >
                <div
                  style={{ background: image.colorCode }}
                  className="h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer"
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SetColor;
