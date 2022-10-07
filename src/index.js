import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import rootReducer from "./reducers";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
    
  </React.StrictMode>
);

