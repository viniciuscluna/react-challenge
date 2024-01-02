import { useAppSelector } from "../app/hooks";
import {
  firstNameProcessed,
  lastNameProcessed,
} from "../features/form/formSlice";

import styles from "./Viewer.module.scss";
import Heading from "./Heading";

export const Viewer = () => {
  const firstName = useAppSelector(firstNameProcessed);
  const lastName = useAppSelector(lastNameProcessed);

  return (
    <div className={styles.container}>
      <Heading word={firstName} />
      <Heading word={lastName} />
    </div>
  );
};
