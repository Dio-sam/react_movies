import React from "react"
import {BrowserRouter as Router,Route,Link}from "react-router-dom"
import MyList from "./components/MyList";
import Popular from "./components/Popular";
import Discover from "./components/Discover";
import './bootstrap.min.css';
import './App.css';

class App extends React.Component{
render(){
  return(
    <Router>
      <nav className="nav">
        <ul >
          <li ><Link  to="/discover/" >This week</Link></li>
          <li><Link  to="/popular/">Popular</Link></li>
          <li ><Link  to="/my-list/" >My List</Link></li>
        </ul>
      </nav>
      
      <div className="container-fluid content">
        <div className="row">
          <Route path="/discover/:page?" component={Discover}/>
          <Route path="/popular/:page?" exact component={Popular}/>
          <Route path="/my-list/" component={MyList}/>
        </div>
      </div>
    </Router>
    
  )
  
}

}
export default App