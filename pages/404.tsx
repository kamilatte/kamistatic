// pages/404.tsx

import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>404: Not Found</title>
          <style>
            {`
              body {
                font-family: Arial, sans-serif;
                text-align: center;
                margin: 20vh auto;
                color: #333;
              }

              h1 {
                font-size: 3em;
                margin-bottom: 10px;
                color: white;
              }

              p {
                font-size: 1.2em;
                margin: 0;
                color: #808080;
              }
            `}
          </style>
        </head>
        <body>
          <h1>404: Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </body>
      </html>
    </>
  );
};

export default NotFoundPage;
