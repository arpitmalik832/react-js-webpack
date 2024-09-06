import {
  useBackPress,
  Button,
} from '@arpitmalik832/react-js-rollup-monorepo-library';

import ButtonV2 from '../../components/atoms/Button';

const Home = () => {
  useBackPress();

  return (
    <div>
      Home
      <Button />
      <ButtonV2 />
    </div>
  );
};

export default Home;
