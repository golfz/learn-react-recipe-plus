import React, { Component } from 'react'

class FormNewFood extends Component {
  
  state = {
    title: "",
    img: "",
    instruction: "",
    ingredients: [
      "",
    ],
  }

  resetForm = () => {
    this.setState((prevState, props) =>({
      title: "",
      img: "",
      instruction: "",
      ingredients: [""],
    }))
  }

  onFieldChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  onIngredientFieldChange = (index) => (e) => {
    let temp = this.state.ingredients
    temp[index] = e.target.value
    this.setState({
      ingredients: temp
    })
  }
  
  clickCloseForm = (e) => {
    e.preventDefault()
    this.resetForm()
    this.props.fnCloseForm()
  }
  
  clickSubmit = (e) => {
    e.preventDefault()
    this.props.fnNewFood(this.state)
    this.resetForm()
    this.props.fnCloseForm()
  }
  
  clickAddIngredient = () => {
    this.setState({
      ingredients: [...this.state.ingredients, ""]
    })
  }
  
  render() {
    return (
      <div className="form-area" style={{display: this.props.isVisible ? 'block' : 'none' }}>
        <div className="form-wrapper">
          <form onSubmit={(e) => e.preventDefault()}>
            <button type="button" onClick={this.clickCloseForm} id="btn-close-form-new-food">X</button>
            <div className="form-group">
              <label>Title </label>
              <input name="title" type="text" onChange={this.onFieldChange} value={this.state.title} />
            </div>
            <div className="form-group">
              <label>Picture url </label>
              <input name="img" type="text" onChange={this.onFieldChange} value={this.state.img} />
            </div>
            <div className="form-group">
              <label>Instructions </label>
              <textarea name="instruction" onChange={this.onFieldChange} value={this.state.instruction} />
            </div>
            <div className="form-group">
              <label>Ingredients </label>
              {this.state.ingredients.map((item,index) => <input key={index} name="ingredients" type="text" onChange={this.onIngredientFieldChange(index)} value={item} />)}
              <button onClick={this.clickAddIngredient}>+</button>
            </div>
            <div className="form-group">
              <button type="button" onClick={this.clickSubmit}>Add recipe</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default FormNewFood