import React, { Component } from 'react';
import Checkbox from "./components/Checkbox.js";
import './App.css'
//import logo from './images/sslogo.png'
//import rectangle from './images/result rectangle.png'
//import store from './images/store.png'

const pretendThisIsTheDirectory = ["Accessories","Books","Clothing","Crafts","Food","Gifts","Household"]
const OPTIONS = pretendThisIsTheDirectory


class App extends Component {

  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };


  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    const bckstyle={
      backgroundColor: 'yellow',
      width: '100px',
      height: '100px'
    };
    return (
        
        <>
        <div className='sr_page'>
        <div>
        {OPTIONS.filter(name => name.includes('J')).map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))}
        </div>
        <h1>Filter</h1>
        <div className="rectangle" />
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-12">
            
              <form onSubmit={this.handleFormSubmit}>
                {this.createCheckboxes()}

                <div className="form-group mt-2">
                
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
        </>
      
    );
  }
}

export default App;