import { IconType } from "react-icons";

interface Props {
  label: string;
  disabled?: boolean;
  small?: boolean;
  custom?: string;
  icon?: IconType;
  outline?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({
  label,
  disabled,
  outline,
  small,
  icon: Icon,
  onClick,
}: Props) => {
  return (
    <button
      disabled={disabled}
      className={`
      disabled:cursor-not-allowed 
      disabled:opacity-70 
      hover:opacity-80 
      rounded-md 
      w-full 
      transition 
      border-slate-800 
      flex 
      items-center
      justify-center
      gap-3
      ${outline ? "bg-white" : "bg-slate-700"}
      ${outline ? "text-sm" : "text-white"}
      ${outline ? "border-2 border-slate-800" : "border-none"}
      ${small ? "text-sm font-light" : "text-base font-medium"}
      ${small ? "py-1.5 px-3" : "py-2 px-4"}
      `}
      onClick={onClick}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
