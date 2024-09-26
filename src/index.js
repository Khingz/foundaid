import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { NavigationProvider } from './contexts/NavigationContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import config from './utils/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(config.GOOGLE_AUTH_CLIENT_ID);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={config.GOOGLE_AUTH_CLIENT_ID}>
      <AuthProvider>
        <NavigationProvider>
          <App />
        </NavigationProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);


