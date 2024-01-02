import { Control, useController } from "react-hook-form";

import styles from './Input.module.scss';

type InputProps = {
  name: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, any>
};

const Input = ({ name, label, control }: InputProps) => {
  const { field } = useController({
    name,
    control,
    rules: { required: true}
  });
  return (
    <p className={styles.paragraph}>
      <label htmlFor={name}>{label}</label>
      <input {...field} name={name} placeholder={label} />
    </p>
  );
};

export default Input;