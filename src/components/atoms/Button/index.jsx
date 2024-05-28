import { useDispatch } from 'react-redux';

import { updateStore } from '../../../redux/slices/appSlice';

import s from './index.scss';

/**
 * @description Button component.
 * @returns {React.JSX.Element} The Button Component.
 * @example <Button />
 */
const Button = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      data-testid="button"
      data-cy="button"
      className={s.button}
      onClick={() => {
        dispatch(updateStore({ key: 'x', value: 'a' }));
      }}
    >
      Button
    </button>
  );
};

export default Button;
