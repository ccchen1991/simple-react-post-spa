import React, { Component } from 'react';
import { Switch, Route, NavLink, BrowserRouter} from 'react-router-dom';
import AboutUs from './aboutUs';
import PostTable from '../containers/postTableContainer';
import TodoTable from '../containers/todoTableContainer';
import './app.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
        <ul className="header">
            <li><NavLink exact to="/Todo">Todo</NavLink></li>
            <li><NavLink to="/Post">Post</NavLink></li>
            <li><NavLink to="/AboutUs">About Us</NavLink></li>
        </ul>
        <div className="content">
        <Switch>
            <Route exact path="/Todo" component={TodoTable} />
            <Route path="/Post" component={PostTable} />
            <Route path="/AboutUs" component={AboutUs}/>
        </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
