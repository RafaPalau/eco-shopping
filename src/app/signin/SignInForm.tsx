"use client";

import React, { useEffect, useState } from "react";
import Input from "../components/inputs/Input";
import Heading from "../components/product/Heading";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../components/product/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SafeUser } from "../../../types";

interface Props {
  currentUser: any | null;
}

const SignInForm: React.FC<Props> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Login efetuado com sucesso!");
      }

      if (callback?.error) {
        toast.error("Login falhou!");
      }
    });
  };

  if (currentUser) {
    return (
      <p className="text-center">Você já está logado! Redirecionando...</p>
    );
  }

  return (
    <>
      <Heading title="Entrar no Eco Shopping" />
      <Button
        outline
        label="Entrar com Google"
        icon={AiOutlineGoogle}
        onClick={() => {
          signIn("google");
        }}
      />
      <hr className="bg-slate-400 w-full h-px" />
      <Input
        required
        errors={errors}
        register={register}
        id="email"
        label="E-mail"
        disabled={isLoading}
        type="email"
      />

      <Input
        required
        errors={errors}
        register={register}
        id="password"
        label="Senha"
        disabled={isLoading}
        type="password"
      />

      <Button
        label={isLoading ? "Carregando..." : "Entrar"}
        disabled={isLoading}
        onClick={handleSubmit(onSubmit)}
      />

      <p className="text-sm">
        Não tem uma conta? {` `}
        <Link href="/signup" className="underline">
          Cadastrar
        </Link>
        `
      </p>
    </>
  );
};

export default SignInForm;
