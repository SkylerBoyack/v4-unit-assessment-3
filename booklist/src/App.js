import './App.css';
import React, {Component} from 'react'
import  Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import data from '../src/data'



class App extends Component{
  constructor(props){
    super(props)
     this.state = {
      book:data,
      shelf:[],
      userInput: '',
      filteredbook: []
     }
     this.addToShelf = this.addToShelf.bind(this)
     this.handleChange = this.handleChange.bind(this)
  }

  addToShelf = (index) => {
    const {shelf} = this.state.book.push(index)
this.setState({shelf:shelf})
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

filterbook(prop){
let book = this.state.book
let filteredbook = [];

for(let i = 0; i < book.length; i++) {
    if(book[i].hasOwnProperty(prop) ){
     filteredbook.push(book[i]);
    }
  }

this.setState({  filteredbook: filteredbook })
}



  render(){
    return(<div className="App">
    {this.state.book.map((element, index)=>{
     return (
      <BookList
     books={element}
     index={index}
      handleChange={this.handleChange}
      filterbook={this.filterbook}/>
      )})}
    <Shelf/>
 
      {this.state.book.map((element, index)=>{
     return (
      <Header
     books={element}
     index={index}
     handleChange={this.handleChange}
      filterbook={this.filterbook}/>
      )})}




      
    </div>)
  }

}


export default App
