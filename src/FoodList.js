import React, { Component } from 'react'
import FoodItem from './FoodItem'

class FoodList extends Component {
  
  render() {
    return (
      <div id="food-wrap">
        {this.props.foods.map(f => <FoodItem key={'id'+f.id} food={f} fnRemoveFood={this.props.fnRemoveFood} />)}
      </div>
    )
  }
}

export default FoodList