import { useDispatch } from 'react-redux';
import { slices } from '@arpitmalik832/react-js-rollup-monorepo-library';

import s from './index.scss';

const Button = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      data-testid="button"
      data-cy="button"
      className={s.button}
      onClick={() => {
        dispatch(slices.updateStore({ key: 'x', value: 'a' }));
      }}
    >
      Button
    </button>
  );
};

export default Button;
