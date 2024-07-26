import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative bg-green-100">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-6 md:mb-0 text-center">
          <h1 className="font-bold text-green-700 mb-4">Novidade Ecológica</h1>
          <p className="text-lg md:text-xl text-green-800 mb-2">
            Produtos de alta qualidade com economia de materiais
          </p>
          <p className="text-2xl font-bold md:text-3xl text-orange-500">
            Aproveite nossos descontos exclusivos!
          </p>
        </div>
        <div className="w-1/3 relative aspect-video">
          <Image
            src="/banner-image.png"
            alt="Imagem simbolizando os produtos do Eco Shop em Promoção"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
