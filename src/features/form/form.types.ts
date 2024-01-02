import { LetterMatch } from "../../utils/types";

export interface FormState {
  firstName: string;
  firstNameProcessed: LetterMatch[];
  lastName: string;
  lastNameProcessed: LetterMatch[];
}

export interface FormValuePayload {
    firstName: string;
    lastName: string;
}

