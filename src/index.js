import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import configStore from './store/configStore';
import './index.css';
import App from './App';
import CounterComponent from './components/CounterComponent';
import registerServiceWorker from './registerServiceWorker';

const store = configStore({});

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={CounterComponent}/>
                <Route path="counter" component={CounterComponent} />
            </Route>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
