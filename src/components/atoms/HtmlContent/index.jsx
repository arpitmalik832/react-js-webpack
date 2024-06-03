import { Helmet, HelmetProvider } from 'react-helmet-async';

/**
 * @description HtmlContent component
 * @param {object} root0 props
 * @param {string} root0.title title for the page
 * @param {string} root0.description description for the page
 * @returns {React.JSX.Element} returns the Html content like title and description for a page
 * @example <HtmlContent title="title" description="description" />
 */
const HtmlContent = ({ title, description }) => (
  <HelmetProvider>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={`${description}`} />
    </Helmet>
  </HelmetProvider>
);

export default HtmlContent;
