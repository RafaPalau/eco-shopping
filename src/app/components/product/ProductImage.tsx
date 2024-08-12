"use client";

import {
  CartProduct,
  selectedImage,
} from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";

interface Props {
  cartProduct: CartProduct;
  product: any | null;
  handleColorSelect: (value: selectedImage) => void;
}

const ProductImage: React.FC<Props> = ({
  cartProduct,
  product,
  handleColorSelect,
}: Props) => {
  return (
    <div className="grid grid-cols-6 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product?.images.map((image: any, index: number) => {
          return (
            <div
              key={index}
              onClick={() => handleColorSelect(image)}
              className={`relative w-[80%] aspect-squared rounded border-teal-300
            ${
              cartProduct.selectedImage.color === image.color
                ? "border-[1.5px]"
                : "border-none"
            }
            `}
            >
                {/* // não aparece a imagem aqui */}
              <>
              <Image
                src={image.image}
                alt={image.color}
                height={500}
                width={500}
                className="object-contain"
              />
              {console.log(image.image)}
              </>
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square ">
        <Image
          src={cartProduct.selectedImage.image}
          alt={cartProduct.name}
          fill
          className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
        />
      </div>
    </div>
  );
};

export default ProductImage;
