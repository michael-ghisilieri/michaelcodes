import React, { FC, useEffect } from 'react';

import './Error.css';

const Error404: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="error-container">
      <h1>404</h1>
      <p>
        Sorry, but the page you were looking for cannot be found. Click{' '}
        <a href="/">here</a> to return to home!
      </p>
    </div>
  );
};

export default Error404;
