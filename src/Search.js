import React, { Component } from 'react';

class Search extends Component {
  
  state = {
    value: ""
  }

  fnOnChange = (e) => {
    let s = e.target.value
    while(s.indexOf("  ") !== -1) {
      s = s.replace("  ", " ")
    }
    if(s === " ") s = ""
    e.target.value = s
    this.setState({value: s})
    this.props.fnOnSearchFood(s)
  }
  
  render() {
    return (
      <div id="search">
        <span>Search: </span>
        <input type="text" onChange={this.fnOnChange} />
      </div>
    )
  }
}

export default Search