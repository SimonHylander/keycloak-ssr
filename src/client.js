import App from './App';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import {hydrate} from 'react-dom';
import { Cookies, SSRKeycloakProvider } from '@react-keycloak/ssr'
import { getKeycloakConfig } from './utils'

hydrate(
  <SSRKeycloakProvider
    keycloakConfig={getKeycloakConfig()}
    persistor={Cookies}
  >
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </SSRKeycloakProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}