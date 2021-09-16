import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  formContact: {},
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    getContact: (state, { payload }) => {
      state.formContact = payload;
    },
  },
});

export const { getContact } = contactSlice.actions;
export const contactSelector = (state) => state.contact;
export default contactSlice.reducer;

export function fetchContact(id) {
  return async (dispatch) => {
    dispatch(getContact());

    alert(initialState.formContact);
  };
}
