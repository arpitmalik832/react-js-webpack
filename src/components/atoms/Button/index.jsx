import s from './index.scss';

/**
 * @description Button component.
 * @returns {React.JSX.Element} The Button Component.
 * @example <Button />
 */
const Button = () => (
  <button
    type="button"
    data-testid="button"
    data-cy="button"
    className={s.button}
  >
    Button
  </button>
);

export default Button;
