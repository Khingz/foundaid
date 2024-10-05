import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <div>
      <Helmet>
          <title>Foundaid America - 404</title>
          <meta name='description' content='This page does not exist on foundaid' />
      </Helmet>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;