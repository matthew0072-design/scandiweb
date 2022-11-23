import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';
import {store, persistor} from '../src/Store/store';
import {client} from './client/client';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </PersistGate>
    </Provider>
     
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
