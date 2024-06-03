import { createSlice } from '@reduxjs/toolkit';
import { THEME } from '../../config/app';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    theme: THEME.LIGHT,
  },
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
    /**
     * @description action to set dark theme
     * @param {object} state represents the app state
     * @returns {object} updated state
     * @example setDarkTheme()
     */
    setDarkTheme: state => ({
      ...state,
      theme: THEME.DARK,
    }),
    /**
     * @description action to set light theme
     * @param {object} state represents the app state
     * @returns {object} updated state
     * @example setLightTheme()
     */
    setLightTheme: state => ({
      ...state,
      theme: THEME.LIGHT,
    }),
  },
});

export const { updateStore, setDarkTheme, setLightTheme } = appSlice.actions;

export default appSlice.reducer;
