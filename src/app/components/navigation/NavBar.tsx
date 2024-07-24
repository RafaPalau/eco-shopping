import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import Logo from "../Logo/Logo";



const NavBar = () => {
  return (
    <nav
      className="
  sticky
  top-0
  w-full
  bg-green-200
  z-30
  shadow-md
  "
    >
      <div className="py-5 border-b-[2px]">
        <Container>
          <div className="flex justify-between items-center gap-3 md:gap-0">
            <Link href="/">
              <Logo />
            </Link>
            <div className="hidden md:block">Procurar</div>
            <div className="flex items-center gap-6">
              <div>Carrinho</div>
              <div>Perfil</div>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default NavBar;
