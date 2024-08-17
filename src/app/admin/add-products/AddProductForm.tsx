"use client";

import CustomCheckbox from "@/app/components/inputs/CustomCheckbox";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import Heading from "@/app/components/product/Heading";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { categories } from "../../../../utils/Categories";
import CategoryInput from "@/app/components/inputs/CategoryInput";
import { colors } from "../../../../utils/Color";
import SelectColor from "@/app/components/inputs/SelectColor";

export type ImageType = {
  color: string;
  colorCode: string;
  image: File | null;
};

export type UploadedImageType = {
  color: string;
  colorCode: string;
  image: string;
};

const AddProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<ImageType[] | null>();
  const [isProductCreated, setIsProductCreated] = useState(false);

  console.log(images)

  const {
    register,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      category: "",
      brand: "",
      images: [],
      inStock: false,
    },
  });

  useEffect(() => {
    setCustomValue("images", images);
  }, [images]);

  useEffect(() => {
    if (isProductCreated) {
      reset();
      setImages(null);
      setIsProductCreated(false);
    }
  }, [isProductCreated]);

  const category = watch("category");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const addImageToState = useCallback((value: ImageType) => {
    setImages((prev) => {
      if (!prev) {
        return [value];
      }

      return [...prev, value];
    });
  }, []);

  const removeImageFromState = useCallback((value: ImageType) => {
    setImages((prev) => {
      if (prev) {
        const filteredImages = prev.filter(
          (item) => item.color !== value.color
        );
        return filteredImages;
      }
    });
  }, []);

  return (
    <>
      <Heading title="Adicionar Produto" center />
      <Input
        id="name"
        label="Nome"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="price"
        label="Preço"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="number"
        required
      />

      <Input
        id="brand"
        label="Marca"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <TextArea
        id="description"
        label="Descrição"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <CustomCheckbox
        id="inStock"
        label="Este produto está em estoque"
        register={register}
      />
      <div className="w-full font-normal">
        <div className="mb-2 font-semibold">Selecione a Categoria</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h[50vh] overflow-y-auto">
          {categories.map((item) => {
            if (item.label === "All") {
              return null;
            }

            return (
              <div key={item.label} className="col-span">
                <CategoryInput
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category === item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col flex-wrap gap-4">
        <div className="font-bold">
          Selecione as cores disponíveis do produto e faça o upload das imagens.
        </div>
        <div className="text-sm">
          Você deve enviar uma imagem para cada cor selecionada, caso contrário
          sua seleção de cores será ignorada
        </div>
        <div className="grid grid-cols-2 gap-3">
          {colors.map((item, index) => {
            return (
              <>
                <SelectColor
                  item={item}
                  key={index}
                  addImageToState={addImageToState}
                  removeImageFromState={removeImageFromState}
                  isProductCreated={isProductCreated}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AddProductForm;
