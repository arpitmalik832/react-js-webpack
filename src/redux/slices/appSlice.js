import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {},
  reducers: {
    /**
     * @description action to add a new key pair to the appStore
     * @param {object} state this refers to the original state on which update will be applied
     * @param {object} action this contains type and payload where type refers to the type of the action and the payload refers to the additional items passed to the action
     * @returns {object} the updated state
     * @example dispatch(updateStore({ key: 'x', value: 'a' }));
     */
    updateStore: (state, action) => ({
      ...state,
      [action.payload.key]: action.payload.value,
    }),
  },
});

export const { updateStore } = appSlice.actions;

export default appSlice.reducer;
