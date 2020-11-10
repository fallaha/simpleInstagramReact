import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Post from './Post';
import SearchPage from './SearchPgae';
import axios from 'axios';
import {connect} from "react-redux";

class App extends React.Component {

  constructor(props){
    super(props);
  }

  // updateSearchResault = async() => {
  //   this.searchPage +=1;
  //   let result = await axios.get("https://api.unsplash.com/search/photos",{
  //     headers:{
  //       Authorization : "Client-ID xq30_RYLP7GfYXtaBnMB4vLq1VPXrFXgpi3RziO9jVA",

  //     },
  //     params:{
  //         query: this.searchText,
  //         per_page : 25,
  //         page : this.searchPage,
  //     },
  //   });
    
  //   this.setState({
  //     searchQuery: this.state.searchQuery.concat(result.data.results),
  //     page: "searchPage",
  //   });
  // }

  // handleScroll = () => {
  //   if (this.state.page !== "searchPage")
  //     return;
  //   const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
  //   const body = document.body;
  //   const html = document.documentElement;
  //   const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  //   const windowBottom = windowHeight + window.pageYOffset;
  //   if (windowBottom >= docHeight) {
  //     this.updateSearchResault();
  //   } 
  // }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  render(){
    return (
      <div className="instagram">
        <Navbar />

        {this.props.main.currentPage === "singlePage" &&
        <Post />
        }
        {this.props.main.currentPage === "searchPage" &&
        <SearchPage />
        }


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
