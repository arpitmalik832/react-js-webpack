import {
  useInitAxios,
  useTheme,
} from '@arpitmalik832/react-js-rollup-monorepo-library';

const useAppMount = () => {
  useTheme();
  useInitAxios();
};

export default useAppMount;
