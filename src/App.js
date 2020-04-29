import React from "react";
import Main from './main';
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <SnackbarProvider>
          <Main />
        </SnackbarProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
