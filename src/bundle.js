import React from 'react';
import { render } from 'react-dom';
import App from './App';

const rootDiv = document.getElementById('trackersConsent');

render(
  React.createElement(App),
  rootDiv,
);
