import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Post from './Post';
import SearchPage from './SearchPgae';
import axios from 'axios';

class App extends React.Component {

  state = {
    page: "singlePage",
    singlePageId : 0,
    searchQuery: {},
    height: window.innerHeight,
    message: 'not at bottom'

  };

  constructor(props){
    super(props);
    this.searchText = "";
    this.searchPage = 1;
  }
  onSearchFormSubmit = async (value) => {
    this.searchText= value;
    this.searchPage = 1;
    let result = await axios.get("https://api.unsplash.com/search/photos",{
      headers:{
        Authorization : "Client-ID xq30_RYLP7GfYXtaBnMB4vLq1VPXrFXgpi3RziO9jVA",

      },
      params:{
          query: value,
          per_page : 25,
      },
    });
    
    this.setState({
      searchQuery: result.data.results,
      page: "searchPage",
    });
  }

  updateSearchResault = async() => {
    this.searchPage +=1;
    let result = await axios.get("https://api.unsplash.com/search/photos",{
      headers:{
        Authorization : "Client-ID xq30_RYLP7GfYXtaBnMB4vLq1VPXrFXgpi3RziO9jVA",

      },
      params:{
          query: this.searchText,
          per_page : 25,
          page : this.searchPage,
      },
    });
    
    this.setState({
      searchQuery: this.state.searchQuery.concat(result.data.results),
      page: "searchPage",
    });
    console.log("the length is :",this.state.searchQuery.length, " and data is : ",this.state.searchQuery)
  }

  handleScroll = () => {
    if (this.state.page !== "searchPage")
      return;
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.updateSearchResault();
    } 
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render(){
    return (
      <div className="instagram">
        <Navbar onSearchFormSubmit={this.onSearchFormSubmit} />

        {this.state.page === "singlePage" &&
        <Post alifallah='hahai' />
        }
        {this.state.page === "searchPage" &&
        <SearchPage searchQuery={this.state.searchQuery} />
        }


      </div>

    );
  }
}

export default App;
