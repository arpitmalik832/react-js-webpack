import Button from './components/atoms/Button';

/**
 * @description Renders the main App component.
 * @returns {React.JSX.Element} The App
 * @example <App />
 */
const App = () => (
  <>
    <h1 data-testid="header" data-cy="header">
      Hello from React!
    </h1>
    <Button />
  </>
);

export default App;
