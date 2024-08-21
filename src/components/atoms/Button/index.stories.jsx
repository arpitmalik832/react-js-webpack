import ReduxWrapper from '../../../wrappers/ReduxWrapper';
import Button from './index';

export default {
  title: 'Atoms/Button',
  component: () => (
    <ReduxWrapper>
      <Button />
    </ReduxWrapper>
  ),
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};
