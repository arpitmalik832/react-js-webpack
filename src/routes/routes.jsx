import { lazy } from 'react';

import ComponentWithSuspense from '../components/atoms/ComponentWithSuspense';

const Home = lazy(() => import(/* webpackChunkName: 'Home' */ '../pages/Home'));
const Abc = lazy(() => import(/* webpackChunkName: 'Abc' */ '../pages/Abc'));
const NotFound = lazy(
  () => import(/* webpackChunkName: 'NotFound' */ '../pages/NotFound'),
);

const routes = [
  {
    path: '/',
    element: <ComponentWithSuspense component={<Home />} />,
  },
  {
    path: 'abc',
    element: <ComponentWithSuspense component={<Abc />} />,
  },
  {
    path: '*',
    element: <ComponentWithSuspense component={<NotFound />} />,
  },
];

export default routes;
