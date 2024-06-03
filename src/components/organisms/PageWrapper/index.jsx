import { Outlet } from 'react-router-dom';

/**
 * @description PageWrapper component
 * @returns {React.JSX.Element} returns the PageWrapper component to wrap the page into it
 * @example <PageWrapper />
 */
const PageWrapper = () => (
  <div>
    Page Wrapper
    <Outlet />
  </div>
);

export default PageWrapper;
