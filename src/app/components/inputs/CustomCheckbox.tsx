"use strict";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
}

const CustomCheckbox: React.FC<Props> = ({
  id,
  label,
  disabled,
  register,
  required,
}) => {
  return (
    <div className="w-full flex flex-row gap-2 items-center">
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        className="cursor-pointer"
      />
      <label htmlFor={id} className="font-medium cursor-pointer">{label}</label>
    </div>
  );
};

export default CustomCheckbox;
