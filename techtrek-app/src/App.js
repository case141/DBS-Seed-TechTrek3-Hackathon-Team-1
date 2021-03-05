import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
// import WalletBalance from './components/WalletBalance';
// import CurrentPricing from './components/CurrentPricing';
// import BuySellAsset from './components/BuySellAsset';

function App() {
  const routes = (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        {/* <PrivateRoute exact path="/wallet-balance" component={WalletBalance} />
        <PrivateRoute
          exact
          path="/current-pricing"
          component={CurrentPricing}
        />
        <PrivateRoute exact path="/buy-sell-asset" component={BuySellAsset} /> */}
      </Switch>
    </>
  );
  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
