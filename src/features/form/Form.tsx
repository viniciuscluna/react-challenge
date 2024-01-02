import { useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setForm, firstName, lastName } from "./formSlice";
import Input from "../../components/Input";

import styles from "./Form.module.css";

type FormValues = {
  firstName: string;
  lastName: string;
};

const Form = () => {
  const dispatch = useAppDispatch();
  const firstNameSelector = useAppSelector(firstName);
  const lastNameSelector = useAppSelector(lastName);
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      firstName: firstNameSelector,
      lastName: lastNameSelector,
    },
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(setForm(data));
  });

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <fieldset className={styles.fieldGroup}>
        <Input control={control} name="firstName" label="First Name" />
        <Input control={control} name="lastName" label="Last Name" />
      </fieldset>
      <button type="submit">Breakify</button>
    </form>
  );
};

export default Form;
