import React, {Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props)
         this.state = {
             head: "BookList"
         }
    }

    render(){
        return (
        <div className="header">
        <h1>{this.state.head}</h1>
        <input className="inputLine" onChange={ (e) => this.props.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.props.filterbook(this.state.userInput) }> Search </button>
            <span className=" filteredbook"> { JSON.stringify(this.props.filterbook, null, 10) } filterdbook: </span>
        </div>
        
        
        )
    }
}

export default Header 