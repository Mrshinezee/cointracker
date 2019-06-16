import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './redux/reducers/store';
import NotFound from './components/NotFound';
import Sample from './components/sample/sample';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Sample} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Fragment>
    </BrowserRouter>
  </Provider>
);
export default App;
