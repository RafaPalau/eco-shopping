"use client";

import { useState } from "react";
import Input from "../components/inputs/Input";
import Heading from "../components/product/Heading";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../components/product/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/signup", data)
      .then((res) => {
        toast.success("Cadastro efetuado com sucesso!");

        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
            router.push("/cart");
            router.refresh();
            toast.success("Login efetuado com sucesso!");
          }

          if (callback?.error) {
            toast.error("Login falhou!");
          }
        });
      })
      .catch(() => toast.error("Algo deu errado!"))
      .finally(() => setIsLoading(false));
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
        id="password"
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
