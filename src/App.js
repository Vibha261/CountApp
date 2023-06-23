import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    } 
  }
  increment = () =>{
    this.setState({count: this.state.count + 1})
  }
  decrement = () =>{
    this.setState({count: this.state.count - 1})
  }
  doubles = ()=>{
    this.setState({count: this.state.count * 2})
  }
  half = () =>{
    this.setState({count: this.state.count / 2})
  }
  render() {
    return (
      <div className='App'>
        <h1> Counter Application </h1><br/><br/><br/><br/><br/>
        <button onClick={this.doubles} className='Counter3'>Double</button>
        <button onClick={this.increment} className='Counter1'>+</button>
        <button onClick={this.decrement} className='Counter2'>-</button>
        <button onClick={this.half} className='Counter4'>Half</button><br/><br/><br/><br/><br/>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}

export default App

