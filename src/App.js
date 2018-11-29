import React, { Component } from 'react';
import './App.css';
import axios from 'axios'




class App extends Component{
  constructor(props){
    super(props);
    this.state ={

    }
  }

  componentDidMount(){    
    console.log("ENV FILE : ", process.env)
    console.log("ENV FILE : ", process.env.REACT_APP_SECRET)
    axios.get(process.env.REACT_APP_URL)
    .then(resp => console.log("resp", resp))
    .catch(err => console.log("Error :", err));
    
  }


  render(){
    return(
      <div className="App">
        <h5>Application JS</h5>
      </div>
    )
  }
}




// class App extends Component {
//   render() {
//     return (
      // <div className="App">
      //   <h1>Application JS</h1>
      // </div>
//     );
//   }
// }

export default App;
