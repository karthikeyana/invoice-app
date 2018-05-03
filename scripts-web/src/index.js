import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    header="I am a FullStack Developer"
    main="I am the main"
    footer="©2018 - Karthikeyan Anbalagan. All Rights Reserved."
  />,
  document.getElementById('root')
);

registerServiceWorker();
