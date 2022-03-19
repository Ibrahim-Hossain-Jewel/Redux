import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';
import Total from '../Total';
import Max from '../Max';
import CreateCounter from '../CreateCounter';
import Counters from '../Counters';

const store = createStore(reducers)
class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
        <CreateCounter />
          <Counters />
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
