import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Route, withRouter, Switch } from 'react-router-dom';

// Components
import Movies from './Movies';
import MovieInfo from './MovieInfo';

import { APIURL } from '../const';

// Styles
import './App.scss';

const cache = new InMemoryCache();
const client = new ApolloClient({ cache: cache, uri: APIURL });

const App = () => {
  return (
    <div className="app">
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route exact path="/info/:id" component={MovieInfo} />
        </Switch>
      </ApolloProvider>
    </div>
  );
};

export default withRouter(App);
