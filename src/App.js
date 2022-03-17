import React from 'react';
import './App.css';
import store from './components/store';
import { Provider } from 'react-redux';
import Count from './components/Count';
import Control from './components/Control';

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Hello App.js</h1>
          <Count />
          <Control />
        </div>
      </Provider>
    );
  }
}

export default App;
