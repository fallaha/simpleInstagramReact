import React from 'react';
import './SearchPage.css';
import axios from 'axios';
import Faker from 'faker';
import TinyPost from "./TinyPost";
import {setSearchText} from './actions/index'
import {connect} from "react-redux"
class SearchPage extends React.Component{

    constructor(props){
        super(props);
        this.postimage = [];
        for(var i=0; i<10; i++){
            this.postimage.push(Faker.internet.avatar());
        }
        this.seatchText = this.props.searchQuery;
        this.state = {
            searchResult : []
        }
        this.componentWillUpdate = this.componentWillMount

    }
    async componentWillMount (){
        if (this.props.searchText !== this.props['match']['params']['text'])
            this.props.setSearchText(this.props['match']['params']['text'])
        let result = await axios.get("https://api.unsplash.com/search/photos",{
            headers:{
              Authorization : "Client-ID xq30_RYLP7GfYXtaBnMB4vLq1VPXrFXgpi3RziO9jVA",
            },
            params:{
                query: this.props['match']['params']['text'],
                per_page : 25,
                page:1,
            },
          });
          this.setState({
              searchResult:result.data.results,
          })
    }

    
    render(){
        return (
            <div className="searchbody">
               {this.state.searchResult.map(
                   (image) => {
                        return (
                            <TinyPost image={image}/>
                        );
                    })}

            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        searchText : state.search.searchText
    }
}
export default connect(mapStateToProps,{setSearchText})(SearchPage);