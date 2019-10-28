import React from 'react' 


export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            a: '1'
        }
    }

    render(){
        return <div>{a}</div>
    }
}