"use client";

import { useState } from "react";
import Input from "../components/inputs/Input";
import Heading from "../components/product/Heading";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../components/product/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };

  return (
    <>
      <Heading title="Cadastrar no Eco Shopping" />
      <Button
        outline
        label="Cadastrar com Google"
        icon={AiOutlineGoogle}
        onClick={() => console.log("Google")}
      />
      <hr className="bg-slate-400 w-full h-px" />
      <Input
        required
        errors={errors}
        register={register}
        id="name"
        label="Nome"
        disabled={isLoading}
      />

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
        id="passowrd"
        label="Senha"
        disabled={isLoading}
        type="password"
      />

      <Button
        label={isLoading ? "Carregando..." : "Cadastrar"}
        disabled={isLoading}
        onClick={handleSubmit(onSubmit)}
      />

      <p className="text-sm">
        Já tem uma conta? {` `}
        <Link href="/signin" className="underline">
          Entrar
        </Link>
        `
      </p>
    </>
  );
};

export default SignUpForm;
