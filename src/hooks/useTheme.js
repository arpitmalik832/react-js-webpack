import { useCallback, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fromEvent } from 'rxjs';

import { setDarkTheme, setLightTheme } from '../redux/slices/appSlice';

/**
 * @description hook to check and update the app theme according to user preferences
 */
const useTheme = () => {
  const dispatch = useDispatch();

  /**
   * @description function to update the store for the theme values
   * @param {boolean} isDark flag if the theme is dark or not
   * @example updateStore(isDark)
   */
  const updateStore = useCallback(
    isDark => {
      if (isDark) {
        dispatch(setDarkTheme());
      } else {
        dispatch(setLightTheme());
      }
    },
    [dispatch],
  );

  useLayoutEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const mqChange = fromEvent(mq, 'change');

    updateStore(mq.matches);

    mqChange.subscribe(e => updateStore(e.matches));
  }, [updateStore]);
};

export default useTheme;
