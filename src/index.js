import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import  {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import  {Provider} from 'react-redux';
import reducer from "./reducers"

let store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.getElementById('root')
);


