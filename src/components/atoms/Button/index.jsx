import s from './index.scss';

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
