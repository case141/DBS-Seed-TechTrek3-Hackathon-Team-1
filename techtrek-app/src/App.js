import logo from './logo.svg';
import './App.css';
import CurrentPricing from './components/CurrentPrice/CurrentPricing';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { WalletBalance } from './components/WalletBalance';
import Navbar from "./components/Navbar";
import Login from "./components/Login";

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
        <Route path="/current-pricing">
            <CurrentPricing />
        </Route>
        <Route path="/wallet-balance">
            <WalletBalance />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
