import React from "react";
import "./TinyPost.css";


class TinyPost extends React.Component{
    constructor(props){
        super(props);
        this.postEelement = React.createRef();
        this.state = {
            span : 0
        }
    }

    componentDidMount(){
        this.postEelement.current.addEventListener('load',this.setSpan);
    }

    componentWillUpdate(){
        this.state['span'] = 0;
    }

    setSpan = (event) =>
    {
        let height = event.target.clientHeight;
        this.setState({
            span: Math.ceil(height/10),
        })
        
    }

    render(){
        return (
            <div style={{gridRowEnd:`span ${this.state.span}`}} className="post-card">
                {this.state.span > 1 ?
                    <img style={{height:"100%"}} ref={this.postEelement} alt={this.props.image.alt_description} src={this.props.image.urls.small}/>
                    :
                    <img ref={this.postEelement} alt={this.props.image.alt_description} src={this.props.image.urls.small}/>
                }
                <div className="caption">
                    <p>{this.props.image.alt_description ? this.props.image.alt_description :this.props.image.user.name }</p>
                </div>
            </div>
        )
    }
}

export default TinyPost; 