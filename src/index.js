import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'; 

const token = localStorage.getItem('token');
const client = new ApolloClient({
    uri: 'https://help-desk-demo.deepsense.dev/graphql/',
    cache: new InMemoryCache(),
    headers: { 
      authorization:`jwt ${token}`  || "" 
    }
  });
  
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client} >
    <App />
    </ApolloProvider>
);


