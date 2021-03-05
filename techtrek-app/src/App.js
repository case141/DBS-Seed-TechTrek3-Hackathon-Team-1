import logo from './logo.svg';
import './App.css';
import CurrentPricing from './components/CurrentPrice/CurrentPricing';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { WalletBalance } from './components/WalletBalance';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <PrivateRoute path="/current-pricing">
            <CurrentPricing />
        </PrivateRoute>
        <PrivateRoute path="/wallet-balance">
            <WalletBalance />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
