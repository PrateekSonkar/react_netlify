//adding routes and mui theme
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

// importing components
import CreateBin from '../components/CreateBins'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blue,
    secondary: pink,
  }
});


const Routes = props => {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div>            
            <Switch>
              <Route path="/" component={CreateBin} exact={true} />              
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  };
  
  export default Routes;