import logo from './logo.svg';
import './App.css';
import CurrentPricing from './components/CurrentPrice/CurrentPricing';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { WalletBalance } from './components/WalletBalance';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import BuySellAsset from "./components/BuySellAsset";
import Transaction from "./components/Transaction/index";
import PrivateRoute from "./components/PrivateRoute";
import HistoricalPricing from "./components/CurrentPrice/HistoricalPricing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" />
        <Route path="/" component={Navbar} />
      </Switch>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <PrivateRoute exact path="/buy-sell-asset" component={BuySellAsset} >
            <BuySellAsset />
        </PrivateRoute>
        <PrivateRoute exact path="/transaction" component={Transaction} >
            <Transaction />
        </PrivateRoute>
        <PrivateRoute exact path="/current-pricing">
            <CurrentPricing />
        </PrivateRoute>
        <PrivateRoute exact path="/wallet-balance" component={WalletBalance}>
            <WalletBalance />
        </PrivateRoute>
        <PrivateRoute exact path="/historical-pricing" component={HistoricalPricing}>
            <HistoricalPricing />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
