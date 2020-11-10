import React from 'react';
import './SearchPage.css';
import axios from 'axios';
import Faker from 'faker';
import TinyPost from "./TinyPost";
import {connect} from "react-redux";

class SearchPage extends React.Component{

    constructor(props){
        super(props);
        this.postimage = [];
        for(var i=0; i<10; i++){
            this.postimage.push(Faker.internet.avatar());
        }
        this.seatchText = this.props.searchQuery;
        console.log("Search Result: ",this.props.search);
    }


    
    render(){
        return (
            <div className="searchbody">
               {this.props.search.searchResult.map(
                   (image) => {
                        return (
                            <TinyPost image={image}/>
                        );
                    })}

            </div>
        );
    }

}


const mapStateToProps = (state) =>{
    return {
        search: state.search,
    }
}
export default connect(mapStateToProps)(SearchPage);