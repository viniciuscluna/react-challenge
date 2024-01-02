import classnames from "classnames";
import { LetterMatch } from "../utils/types";

import styles from "./Heading.module.scss";

type HeadingProps = {
  word: LetterMatch[];
};
const Heading = ({ word }: HeadingProps) => (
  <h1 className={styles.heading}>
    {word.map((char) => (
      <span
        className={classnames({
          [styles.hightlight]: char.isInPeriodicTable,
        })}
      >
        {char.char}
      </span>
    ))}
  </h1>
);
export default Heading;
