import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormState, FormValuePayload } from "./form.types";
import { ConvertToLetterMatch } from "../../utils/periodicTable";
import { RootState } from "../../app/store";
//import type { RootState } from "../../app/store";

// Define a type for the slice state
const initialFirstName = 'Breaking';
const initialLastName = 'Bad';
// Define the initial state using that type
const initialState: FormState = {
  firstName: initialFirstName,
  firstNameProcessed: ConvertToLetterMatch(initialFirstName),
  lastName: initialLastName,
  lastNameProcessed: ConvertToLetterMatch(initialLastName),
};



export const formSlice = createSlice({
  name: "form",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setForm: (state, action: PayloadAction<FormValuePayload>) => {
      state.firstName = action.payload.firstName;
      state.firstNameProcessed = ConvertToLetterMatch(action.payload.firstName);
      state.lastName = action.payload.lastName;
      state.lastNameProcessed = ConvertToLetterMatch(action.payload.lastName);
    },
  },
});

export const firstNameProcessed = (state: RootState) => state.form.firstNameProcessed;
export const lastNameProcessed = (state: RootState) => state.form.lastNameProcessed;

export const firstName= (state: RootState) => state.form.firstName;
export const lastName = (state: RootState) => state.form.lastName

export const { setForm } = formSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectForm = (state: RootState) => state.form.;

export default formSlice.reducer;
