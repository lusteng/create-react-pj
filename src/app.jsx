import React from 'react' 


export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            a: '1'
        }
    }

     
    handleAdd(){
        let {a} = this.state 
        a++
        this.setState({a})
    }  

    render(){
        return <div onClick={this.handleAdd.bind(this)}>{this.state.a}</div>
    }
}