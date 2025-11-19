import React from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Example } from './example/example';
import { isDevEnvironment } from './shared/utilities';

if (isDevEnvironment()) {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Example />);
  }
}