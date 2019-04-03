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
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ul>
              <li><Link to="/" >This week</Link></li>
              <li><Link to="/popular/">Popular</Link></li>
              <li><Link to="/my-list/" >My List</Link></li>
            </ul>
            <Route path="/" exact component={Discover}/>
            <Route path="/popular/" component={Popular}/>
            <Route path="/my-list/" component={MyList}/>
          </div>
        </div>
      </div>
      

    </Router>

  )
}

}
export default App