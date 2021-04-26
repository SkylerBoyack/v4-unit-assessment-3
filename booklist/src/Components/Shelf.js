import React, {Component} from 'react'

class Shelf extends Component{
    constructor(props){
        super(props)
         this.state = {
             Shelf: "Your Shelf"
         }
    }

    render(){
        return ( 
        <div className=" Shelf">
        <h1>{this.state.Shelf}</h1>
        </div>
        
        
        )
    }
}

export default Shelf