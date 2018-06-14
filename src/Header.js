import React, { Component } from 'react' 

class Header extends Component {
  render() {
    return (
      <div id="header">
        <h1>Recipe App</h1>
        <ul>
          <li className="link" onClick={() => this.props.fnOpenForm()}>New Recipe</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>
    )
  }
}

export default Header