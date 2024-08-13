"use client";

import { useCallback, useState } from "react";
import Avatar from "../Avatar";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";

const UserMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="p-2 border-[1px] border-slate-500 flex flex-row items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition text-slate-700"
        >
          <Avatar />
          <AiFillCaretDown />
        </div>

        {open && (
          <div className="absolute rounded-md w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
            <div>
              <Link href="/orders">
                <MenuItem onClick={toggleOpen}>Suas compras</MenuItem>
              </Link>

              <Link href="/admin">
                <MenuItem onClick={toggleOpen}>Minha conta</MenuItem>
              </Link>
              <MenuItem
                onClick={() => {
                  toggleOpen();
                  signOut();
                }}
              >
                Sair
              </MenuItem>
            </div>
            <div>
              <Link href="/signin">
                <MenuItem onClick={toggleOpen}>Entrar</MenuItem>
              </Link>

              <Link href="/signup">
                <MenuItem onClick={toggleOpen}>Cadastrar</MenuItem>
              </Link>
            </div>
          </div>
        )}
      </div>
      {open ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
