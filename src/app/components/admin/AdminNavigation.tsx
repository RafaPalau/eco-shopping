'use client'

import Link from "next/link";
import Container from "../Container";
import AdminNavigationItem from "./AdminNavigationItem";
import { MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from "react-icons/md";
import { usePathname } from "next/navigation";

const AdminNavigation = () => {
  const pathname = usePathname();


  return (
    <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
      <Container>
        <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
          <Link href="/admin">
            <AdminNavigationItem
              label="Resumo"
              icon={MdDashboard}
              selected={pathname === "/admin"}
            />
          </Link>
          <Link href="/admin/add-products">
            <AdminNavigationItem
              label="Adicionar Produto"
              icon={MdLibraryAdd}
              selected={pathname === "/admin/add-products"}
            />
          </Link>
          <Link href="/admin/manage-products">
            <AdminNavigationItem
              label="Gerenciar Produtos"
              icon={MdDns}
              selected={pathname === "/admin/manage-products"}
            />
          </Link>
          <Link href="/admin/manage-orders">
            <AdminNavigationItem
              label="Gerenciar Encomendas"
              icon={MdFormatListBulleted}
              selected={pathname === "/admin/manage-orders"}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AdminNavigation;
