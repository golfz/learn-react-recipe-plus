import React, { Component } from 'react'

class FoodItem extends Component {
  
  fnClickDelete = (id) => {
    this.props.fnRemoveFood(id)
  }
  
  render() {
    const ingreList = this.props.food.ingredients.map((el,index) => <li key={index}>{el}</li>)
    return (
      <div className="food-item">
        <img src={this.props.food.img} alt={this.props.food.title} />
        <div>
          <h2>{this.props.food.title}</h2>
          <h3>Ingredients :</h3>
          <ul>{ingreList}</ul>
          <h3>Instructions :</h3>
          <p>{this.props.food.instruction}</p>
          <button type="button" onClick={() => this.fnClickDelete(this.props.food.id)}>Delete</button>
        </div>
      </div>
    )
  }sdfsdffsdfsdf
}

export default FoodItem