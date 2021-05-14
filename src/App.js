import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/search">
            <h1>This is a search page </h1>
            </Route>
        </Switch>
      </Router>
      Hello 
    </div>
  );
}

export default App;
