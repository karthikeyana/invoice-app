import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    header="Tax Invoice"
    main="Tax invoice content"
    footer="©2018 - Limitless Mobility solution pvt ltd. All Rights Reserved."
  />,
  document.getElementById('root')
);

registerServiceWorker();
