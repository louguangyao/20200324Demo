import React from 'react';
import run from './MyReduxDemo/index1';
import Demo2 from './ReduxDemo';

export default class Page extends React.Component {
    constructor(props){
        super(props);
        this.state={name:''}
        this.btnClick=this.btnClick.bind(this);
    }
    btnClick(evnt){
        this.setState({name:(new Date()).toLocaleTimeString()});
    }
    render(){
        run();
        const demo2=<Demo2></Demo2>
        return (<div>
            <h1>{this.state.name}</h1>
            <button onClick={this.btnClick}>btn</button>
            <h1>demo2:</h1>
            {demo2}
            </div>);
    }
}