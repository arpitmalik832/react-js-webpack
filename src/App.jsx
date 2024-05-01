import Button from '@atoms/Button';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    console.log('temp');
  }, []);

  return (
    <h1>
      Hello from React!
      <Button />
    </h1>
  );
};

export default App;
