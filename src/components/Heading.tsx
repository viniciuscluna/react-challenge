import classnames from "classnames";
import { LetterMatch } from "../utils/types";

import styles from "./Heading.module.scss";

type HeadingProps = {
  word: LetterMatch[];
};
const Heading = ({ word }: HeadingProps) => (
  <div>
    {word.map((char) => (
      <h1
        className={classnames(styles.heading, {
          [styles.hightlight]: char.isInPeriodicTable,
        })}
      >
        {char.char}
      </h1>
    ))}
  </div>
);
export default Heading;
