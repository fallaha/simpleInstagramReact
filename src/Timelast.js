import React from 'react';


class Timelast extends React.Component{

    constructor(props){
        super(props);
        setInterval(this.updateTime,1000);
        this.state = {
            time : props.inittime == null ? 0: parseInt(props.inittime),
        };
    }

    updateTime = () => {
        this.setState({
            time : this.state.time + 1,
        });
    }
    getCorrectTime(time){
        if (time < 10) return "just now";
        if (time/60 < 1) return "a minute ago";
        return parseInt (time/60+1) + " minutes ago";
    }
    render(){
        return (<p style={{color: 'rgb(85, 85, 85)',fontSize: '10px'}}>{this.getCorrectTime(this.state.time)}</p>);
    }
}

export default Timelast;