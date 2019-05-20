import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { AUTH_TOKEN } from './constants'
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


const httpLink = createHttpLink({
    uri: "https://evening-cliffs-67832.herokuapp.com"
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(AUTH_TOKEN)
    return {
        headers: {
            ...headers,
            authorization: token ? `${token}` : "",
          }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    onError: ({ networkError, graphQLErrors }) => {
        console.log('graphQLErrors', graphQLErrors)
        console.log('networkError', networkError)
    }
});



ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <App />
        </Router>
    </ApolloProvider>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
