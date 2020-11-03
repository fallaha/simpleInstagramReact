import React from 'react';
import './SearchPage.css';
import axios from 'axios';
import Faker from 'faker';
import TinyPost from "./TinyPost";

class SearchPage extends React.Component{

    constructor(props){
        super(props);
        this.postimage = [];
        for(var i=0; i<10; i++){
            this.postimage.push(Faker.internet.avatar());
        }
        this.seatchText = this.props.searchQuery;

    }


    
    render(){
        console.log("noteeeeeeeeeme : ",this.props.searchQuery)
        return (
            <div className="searchbody">
               {this.props.searchQuery.map(
                   (image) => {
                        return (
                            <TinyPost image={image}/>
                        );
                    })}

            </div>
        );
    }

}

export default SearchPage;