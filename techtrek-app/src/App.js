import logo from './logo.svg';
import './App.css';
import CurrentPricing from './components/CurrentPrice/CurrentPricing';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { WalletBalance } from './components/WalletBalance';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
      </div>
      <Switch>
        <Navbar />
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
