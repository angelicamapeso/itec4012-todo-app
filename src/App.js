import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { NavBar } from './components/navbar'
import { AllTodosPage } from './components/pages/all-todos'
import { NewTodoPage } from './components/pages/new-todo'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <AllTodosPage></AllTodosPage>
          </Route>
          <Route path="/new">
            <NewTodoPage></NewTodoPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
