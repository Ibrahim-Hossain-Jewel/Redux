import React from 'react';
import './App.css';
import Counter from '../Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';
import Total from '../Total';
import Max from '../Max';
import CreateCounter from '../CreateCounter';

const store = createStore(reducers)
class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
        <CreateCounter />
          <Counter />
          <div>
            <Total />
            <Max />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
