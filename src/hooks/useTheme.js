import { useCallback, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fromEvent } from 'rxjs';

import { setDarkTheme, setLightTheme } from '../redux/slices/appSlice';

const useTheme = () => {
  const dispatch = useDispatch();

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
