import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Example } from './example/example';
import { isDevEnvironment } from './shared/utilities';

if (isDevEnvironment()) {
  ReactDOM.render(
    <Example />,
    document.getElementById('root') as HTMLElement
  );
}