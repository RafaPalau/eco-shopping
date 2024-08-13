"use client";

import React, { useCallback, useState } from "react";
import Avatar from "../Avatar";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { SafeUser } from "../../../../types";

interface Props {
  currentUser: any | null;
}

const UserMenu: React.FC<Props> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleIsOpen}
          className="p-2 border-[1px] border-slate-500 flex flex-row items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition text-slate-700"
        >
          <Avatar src={currentUser?.image} />
          <AiFillCaretDown />
        </div>

        {isOpen && (
          <div className="absolute rounded-md w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
            {currentUser ? (
              <div>
                <Link href="/orders">
                  <MenuItem onClick={toggleIsOpen}>Suas compras</MenuItem>
                </Link>

                <Link href="/admin">
                  <MenuItem onClick={toggleIsOpen}>Minha conta</MenuItem>
                </Link>
                <hr />
                <MenuItem
                  onClick={() => {
                    toggleIsOpen();
                    signOut({ callbackUrl: "/signin" }); 
                  }}
                >
                  Sair
                </MenuItem>
              </div>
            ) : (
              <div>
                <Link href="/signin">
                  <MenuItem onClick={toggleIsOpen}>Entrar</MenuItem>
                </Link>

                <Link href="/signup">
                  <MenuItem onClick={toggleIsOpen}>Cadastrar</MenuItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleIsOpen} /> : null}
    </>
  );
};

export default UserMenu;
