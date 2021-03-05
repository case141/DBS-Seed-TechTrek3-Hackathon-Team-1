import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Transaction from "./components/Transaction";

function App() {
  return (
    <Router>
      <Switch>
        <Navbar />
        <Transaction />
      </Switch>
    </Router>
  );
}

export default App;
