// import logo from './logo.svg';

import {Route,BrowserRouter,Switch} from "react-router-dom";
import './App.css';
import Form from './components/Form'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <BrowserRouter forceRefresh>

      <Switch>
        <Route exact path= "/" component= {Form} />
        <Route exact path= "/Dashboard" component= {Dashboard} />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
