import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SearchPage from "./components/pages/SearchPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
