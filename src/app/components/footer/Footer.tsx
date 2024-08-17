import Link from "next/link";
import Container from "../Container";
import List from "./List";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-eco-green text-neutral-200 text-sm mt-16">
      <Container>
        <div className="flex flex-row md:flex-row justify-between pt-16 pb-8">
          <List>
            <h3
              className="
           text-base font-bold mb-3
            "
            >
              Categorias
            </h3>
            <Link href="#">Cuidados Pessoais</Link>
            <Link href="#">Moda Sustentável</Link>
            <Link href="#">Casa e Decoração</Link>
            <Link href="#">Items Domésticos</Link>
            <Link href="#">Jardinagem e Horta</Link>
            <Link href="#">Limpeza Ecológica</Link>
          </List>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3
              className="
           text-base font-bold mb-3
            "
            >
              Sobre nós
            </h3>
            <p className="mb-2">
              No Eco Shopping, oferecemos produtos ecológicos e sustentáveis
              para promover um estilo de vida consciente. Nossa missão é
              facilitar o acesso a itens que respeitam o meio ambiente,
              garantindo qualidade e responsabilidade em cada escolha.. &copy;
              Rafael Palau {new Date().getFullYear()} Eco Shopping
            </p>
          </div>

          <List>
            <h3
              className="
           text-base font-bold
            "
            >
              Siga-nos
              <div className="flex gap-2 mt-2">
                <Link href="#">
                  <MdFacebook size={24} />
                </Link>
                <Link href="#">
                  <AiFillInstagram size={24} />
                </Link>
                <Link href="#">
                  <AiFillTwitterCircle size={24} />
                </Link>
                <Link href="#">
                  <AiFillYoutube size={24} />
                </Link>
              </div>
            </h3>
          </List>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
