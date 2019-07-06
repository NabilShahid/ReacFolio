import React, { Component } from 'react';

class Counter extends Component {
    state = {
        ulo:"123"
    }
    divStyle={
        backgroundColor:"red"
    }
    color1="red";
    render() {
        return <React.Fragment><h1>Hello w {this.color1}</h1><button onClick={()=>{this.handleIt("test")}} style={{backgroundColor:this.color1}}>{this.state.ulo+this.suckIt()}</button></React.Fragment>;
    }

    suckIt(){
        setTimeout(()=>{
            this.state.ulo="NIGGA"
            this.setState();
        },5000)
        return "Cheaaaa";
      
    }

    handleIt=(test)=>{
        alert(this.ulo+"  "+test)
        //this.divStyle.backgroundColor="blue"
        this.ulo="dfdfd";
        this.color1="blue";
        this.setState({});
    }

    ulo="fdfd";
}

export default Counter;