import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Post from './Post';
import SearchPage from './SearchPgae';
import axios from 'axios';
import {connect} from "react-redux";
import {BrowserRouter,Switch,Route} from "react-router-dom"

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="instagram">
        <BrowserRouter >
          <Navbar />
          <Switch>
            <Route path="/" exact><Post /></Route>
            <Route path="/search/:text?" component={SearchPage}/>
          </Switch>
        </BrowserRouter>


      </div>

    );
  }
}

const mapStateToProps = (state) =>{
  return {
    main: state.main,
  }
}
export default connect(mapStateToProps)(App);
