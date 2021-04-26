
import React, {Component} from 'react'

class BookList extends Component{
    constructor(props){
        super(props)
         this.state = {
          
        
         }
    }
 

    render(){
      console.log(this.props)
        return( 
          <div className="BookList">
              <ul>
              <button className="addBook" onClick={ () => this.props.addToshelf() }>Add</button>
                <li><img alt="no img" src={this.props.books.img}/>
                 <h2>{this.props.books.title}</h2>
                 <h2> {this.props.books.author}</h2></li> 
             </ul>
         </div>  
            
            )
          }
        }

export default BookList
