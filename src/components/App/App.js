import React from 'react';
import './App.css';
import Counter from '../Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';
const store = createStore(reducers)
class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Hello App.js</h1>
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
