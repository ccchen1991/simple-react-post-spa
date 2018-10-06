import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Post from './Post';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
        <h1>Hi React</h1>
        <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Posts">Posts</NavLink></li>
            <li><NavLink to="/AboutUs">About Us</NavLink></li>
        </ul>
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Posts" component={Post} />
            <Route path="/AboutUs" component={AboutUs}/>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
