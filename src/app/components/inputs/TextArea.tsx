"use strict";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const TextArea: React.FC<Props> = ({
  id,
  label,
  disabled,
  register,
  errors,
  required,
}: Props) => {
  return (
    <div className="w-full relative">
      <textarea
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        className={`
                peer
                w-full
                p-4
                pt-6
                max-h-[150px]
                min-h-[150px]
                outline-none
                bg-white
                font-light
                border-2
                rounded-md
                transition
                disabled: opacity-75
                disabled:cursor-not-allowed
                ${errors[id] ? "border-red-500" : "border-slate-100"}
                ${
                  errors[id] ? "focus:border-red-500" : "focus:border-slate-100"
                }
                `}
      />
      <label
        className={
          `
           ${errors[id] ? "text-red-400" : "text-slate-400"}
          absolute cursor-text text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4
          `
        }
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
