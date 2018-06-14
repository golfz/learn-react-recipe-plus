import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Search from './Search'
import FoodList from './FoodList'
import FormNewFood from './FormNewFood'

class RecipePage extends Component {
  
  state = {
    isFormVisible: false,
    searchStr: "",
    nextId: 4,
    foods : [
      {
        id: 1,
        img: "https://thespicyapron.com/wp-content/uploads/2017/06/Easy-Camping-Meals-Pasta-with-Fork.jpg",
        title: "Spaghetti",
        ingredients: ["aaaaaaa", "bbbbbb"],
        instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates incidunt autem blanditiis magnam tenetur porro labore, dolorum accusantium saepe inventore necessitatibus, sapiente sed numquam expedita minus unde ab eum aspernatur!"
      },
    
      {
        id: 2,
        img: "https://fthmb.tqn.com/-XOJpr1awOvO8DSoiz2PY8ua7K4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/172192393-56a20fea3df78cf7727188b7.jpg",
        title: "Milk shake",
        ingredients: ["cccccc", "ddddddddd", "eeeeeee"],
        instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates incidunt autem blanditiis magnam tenetur porro!"
      },
    
      {
        id: 3,
        img: "https://cache.gmo2.sistacafe.com/images/uploads/content_image/image/38693/1442819227-Honey-Toast1.jpg",
        title: "Honey Toast",
        ingredients: ["ffffffff", "ggggggg"],
        instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates incidunt autem blanditiis magnam tenetur porro labore, dolorum accusantium!"
      },
    ]
  }

  fnRemoveFood = (id) => {
    this.setState({foods: this.state.foods.filter(food => food.id!==id)})
  }
  
  fnOnSearchFood = (keyword) => {
    this.setState({searchStr: keyword})
  }
  
  fnOpenForm = () => {
    this.setState({
      isFormVisible: true,
    })
  }
  
  fnCloseForm = () => {
    this.setState({
      isFormVisible: false,
    })
  }
  
  fnNewFood = (food) => {
    this.setState((prevState, props) => ({
      nextId: prevState.nextId + 1,
      foods: [{
        id: prevState.nextId,
        ...food
      }, ...prevState.foods],
    }))
  }
  
  render() {
    return (
      <div>
        <Header fnOpenForm={this.fnOpenForm} />
        <FormNewFood isVisible={this.state.isFormVisible} fnCloseForm={this.fnCloseForm} fnNewFood={this.fnNewFood} />
        <Search fnOnSearchFood={this.fnOnSearchFood} />
        <div>
          <FoodList 
            foods={this.state.foods.filter(f => f.title.toLowerCase().search(this.state.searchStr.toLowerCase()) !== -1)} 
            fnRemoveFood={this.fnRemoveFood} />
        </div>
        <div style={{clear:'both'}} />
        <Footer />
      </div>
    )
  }
}

export default RecipePage