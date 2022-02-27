import React, { Component } from 'react';
import styled from 'styled-components';
import Entries from './components/Entries';
import Searchbar from './components/Searchbar'
import Button from './components/Submit Button';
//import { Button } from 'carbon-components-react';
import logo from './img/sslogo.png';
import store from './img/storefront.png';
import './App.css';
//import './index.css'
import Background from './img/ssbackground.png'

const Headline = styled.h1`
  font-size: 32px;
  line-height: 32px;
  color: blue;
  align-items: center;
  font-weight: bold;
  style={{
    textAlignVertical: "center",
    textAlign: "center",}}
`
;


const TagLine = styled.h3`
  font-size: 16px;
  line-height: 15px;
  color: blue;
  align-items: center;
`
;


class App extends Component {

  state={
    storeImg:store
  
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        this.setState({storeImg:reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  render() {
    
    

    const{storeImg} = this.state
    return (
      <>
      
      
      <div className='App'>
      
      <img src={logo} alt="the logo"/>
      
      <h1 style={{textAlignVertical: "center",textAlign: "center",color:"#451c7f"}}>Fill out this application to have your business featured on Shop Small today!</h1>
      <br></br>
      <br></br>
      <h3 style={{textAlignVertical: "center",textAlign: "center",color:"#451c7f"}}>First Name</h3>
      <Entries/>
      <br></br>
      <br></br>
      <h3 style={{textAlignVertical: "center",textAlign: "center",color:"#451c7f"}}>Last Name</h3>
      <Entries />
      <br></br>
      <br></br>
      <h3 style={{textAlignVertical: "center",textAlign: "center",color:"#451c7f"}}>Business Name</h3>
      <Entries />
      <br></br>
      <br></br>
      <h3 style={{textAlignVertical: "center",textAlign: "center",color:"#451c7f"}}>Business Address</h3>
      <Entries />
      <br></br>
      <br></br>
      <h3 style={{textAlignVertical: "center",textAlign: "center",color:"#451c7f"}}> Business Hours</h3>
      <Entries />
      <br></br>
      <br></br>
      <h3 style={{textAlignVertical: "center",textAlign: "center",color:"#451c7f"}}> Business Description</h3>
      <Entries />
      <br></br>
      <br></br>
      <h3 style={{textAlignVertical: "center",textAlign: "center",color:"#451c7f"}}>Keywords</h3>
      <Entries />
      <br></br>
      <br></br>
      <div className="page">
        <div className="container">
          <div className='img-holder'>
            <img src={storeImg} alt='' id='' className='img'></img>
          </div>
          <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler}/> 
          <div className='label'>
            <label htmlFor='input' className='image-upload'>
              <i className='material-icons'></i>
              <br></br>
              <h3 style={{textAlignVertical: "center",textAlign: "center",color:"#451c7f"}}>Upload Photo</h3>
            </label>
          </div>
        </div>
        <br></br>
        <div><Button></Button></div>
        <br></br>
        </div>
        </div>
      </>
      
      
    );

  }
}

export default App;
