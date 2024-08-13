import Link from "next/link";
import Container from "../Container";

import Logo from "../logo/Logo";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "../../../../actions/getCurrentUser";

const NavBar = async() => {
  const currentUser = getCurrentUser();
  
  return (
    <nav
      className="
  sticky
  top-0
  w-full
  bg-navbar-light-orange
  text-black
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
              <CartCount />
             
             <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default NavBar;
