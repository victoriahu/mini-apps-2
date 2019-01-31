import React, { Component } from "react";
import Results from "./Results.jsx";
import ReactPaginate from 'react-paginate';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      query: '',
      pageNumber: 1,
      pageRangeDisplayed: 3,
      marginPagesDisplayed: 3
    };
    this.search = this.search.bind(this);
    this.changeQuery = this.changeQuery.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  search(e) {
    var query = this.state.query;
    var pageNumber = this.state.pageNumber
    fetch(`http://localhost:3000/events?q=${query}&_page=${pageNumber}`)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      this.setState({
        data: myJson
      })
    })
    e.preventDefault();
  }

  changeQuery(e) {
    this.setState({
      query: e.target.value
    })
  }

  changePage() {
    this.setState({
      pageNumber: 2
    })
    fetch(`http://localhost:3000/events?q=${query}&_page=${pageNumber}`)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      this.setState({
        data: myJson
      })
    })
    e.preventDefault();
  }

  render() {
    return (
      <div>
        Search for historical events based on a keyword:
        <form onSubmit = {this.search}>
          <input type = "text" onChange = {this.changeQuery}></input>
          <button>Search!</button>  
        </form>
        <Results data = {this.state.data}/>
        <ReactPaginate 
          marginPagesDisplayed = {this.state.marginPagesDisplayed}
          pageCount = {this.state.pageNumber}
          pageRangeDisplayed = {this.state.pageRangeDisplayed}
          onPageChange = {this.changePage}
        />
      </div>
    );
  }
}
export default App;

