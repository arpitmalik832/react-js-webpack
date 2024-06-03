import React, { Suspense } from 'react';

import Loader from '../../organisms/Loader';

/**
 * @description ComponentWithSuspense component
 * @param {object} root0 props passed to the component
 * @param {React.JSX.Element} root0.component the component which needed to be loaded with Suspense
 * @param {React.JSX.Element} root0.fallback the fallback component while the component is being loaded
 * @returns {React.JSX.Element} returns the suspended component
 * @example <ComponentWithSuspense component={<Component />} Fallback={<Fallback />} />
 */
const ComponentWithSuspense = ({ component, fallback = <Loader /> }) => (
  <Suspense fallback={fallback}>{component}</Suspense>
);

export default ComponentWithSuspense;
