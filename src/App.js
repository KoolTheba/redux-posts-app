import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Posts</h1>
      </header>
      <Router>
          <Switch>
            <Route exact path='/'>
            </Route>
            <Route exact path='/forest/:id'>
            </Route>
            <Route path='*'>
            </Route>
          </Switch>
    </Router>
    </div>
  );
}

export default App
