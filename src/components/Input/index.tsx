import { InputHTMLAttributes } from "react";
import { ConatinerInput } from "../styles/index";
interface InputsProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

const Input = ({ label, placeholder, ...rest }: InputsProps) => {
  return (
    <ConatinerInput>
      {label && <label>{label}</label>}
      <input {...rest} />
    </ConatinerInput>
  );
};

export default Input;
