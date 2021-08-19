import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from 'redux' // para poder crear un store
import {Provider} from 'react-redux' // proveer mi app de éste store
import rootReducer from './redux/reducers/rootReducer';
import thunk from 'redux-thunk'
const myStore = createStore(rootReducer, applyMiddleware(thunk)) // creo mi store y le digo qué reducer es el habilitado a modificarlo
ReactDOM.render(
    <Provider store={myStore}>
      <App />
    </Provider>,
  document.getElementById('root')
);
// Agarra APP y lo mete adentro del id ROOT
// Los componentes son como etiquetas HTML que yo creo

