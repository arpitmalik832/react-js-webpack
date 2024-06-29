import { useCallback, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setDarkTheme, setLightTheme } from '../redux/slices/appSlice';
import preferredColorScheme from '../utils/eventListeners/preferredColorScheme';

const useTheme = () => {
  const dispatch = useDispatch();

  const updateStore = useCallback(isDark => {
    if (isDark) {
      dispatch(setDarkTheme());
    } else {
      dispatch(setLightTheme());
    }
  }, []);

  useLayoutEffect(() => {
    updateStore(preferredColorScheme.isDark);

    preferredColorScheme.subscribe(e => updateStore(e.matches));

    return () => {
      preferredColorScheme.unSubscribe();
    };
  }, []);
};

export default useTheme;
