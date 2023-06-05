import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/App.tsx';
import { MessageProvider } from './providers/MessageProvider.tsx';
import theme from './styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MessageProvider>
        <App />
      </MessageProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
