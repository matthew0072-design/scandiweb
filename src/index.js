import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';
import store from '../src/Store/store';
import {client} from './client/client';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

    <Provider store={store}>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </Provider>
     
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
