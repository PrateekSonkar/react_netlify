import React from 'react';
import { Provider } from "react-redux";
//import axios from 'axios';

// adding custom inports
import Routes from './router/Routes';
//import temp from './playgroung/play';
import configureStore from './store/configureStore';

// class App extends Component {

//   componentDidMount(){        
//     axios.get(process.env.REACT_APP_URL)
//     .then(resp => console.log("resp", resp))
//     .catch(err => console.log("Error :", err));
//   }

//   render(){
//     return(
//       <Provider store={configureStore()} >
//         <Routes />
//       </Provider>      
//     )
//   }
// }

const store = configureStore();
console.log(store.getState())

const App = (props) => {
  return(
    <Provider store={store} >
      <Routes />
    </Provider> 
  )
}


export default App;
