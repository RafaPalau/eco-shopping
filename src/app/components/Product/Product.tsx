'use client'
import { truncate } from "lodash";
import Image from "next/image";
import { formatPrice, productRating } from "../../../../utils/format";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  data: any;
}

const Product: React.FC<Props> = ({ data }: Props) => {
  const router = useRouter();
 
  return (
    <div
    onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1 cursor-pointer border-[1.2px] border-slate-300 bg-slate-50 rounded-sm p-2 transition
    hover:scale-105 text-center text-sm
    
    "
    >
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden">
          <Image
            className="w-full h-full object-contain"
            src={data.images[0].image}
            alt={data.name}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-3">{truncate(data.name, { length: 20 })}</div>
        <div>
          <Rating readOnly defaultValue={productRating(data)} />
        </div>
        <div>{data.reviews?.length}Avaliações</div>
        <div>{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default Product;
