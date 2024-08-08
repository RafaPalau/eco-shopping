import Image from "next/image";
import { FaUserAstronaut } from "react-icons/fa";

interface Props {
  src?: string | null | undefined;
}

const Avatar: React.FC<Props> = ({ src }: Props) => {
  if (src) {
   return ( <Image
      src={src}
      alt="Avatar"
      width={10}
      height={10}
      className="rounded-full w-12 h-12 border-2 border-white"
    />
  );
  }

  return (
    <FaUserAstronaut
     size={36}
    />
  );
};

export default Avatar;
