import React from 'react';
import axios from 'axios';

import './App.css';
class App extends React.Component {
  state={advice:''}
  
  componentDidMount(){
    this.fetchadvice();
  }

  fetchadvice=()=>{
    axios.get('https://api.adviceslip.com/advice')
      .then((response)=>{
        const {advice}=response.data.slip
        this.setState({advice});
      })
      .catch((error)=>{
        console.log(error);
      });
  }

  render(){
    const {advice}=this.state;
    return(
    <div className="App">
      <div className="box">
      <h3>
        Advice that will change your life
      </h3>
      <div className="content">
        {advice}
      </div>
      </div>
      
      
      
    </div>
    );
    
  }
    
  
}

export default App;
