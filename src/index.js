import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import Search from './search'
import Results from './results'
import store from './store'
import './search.css'
// import registerServiceWorker from './registerServiceWorker';


let Root = () => (
    <Provider store={store}>
        <Router>
            <Switch>              
                <Route exact path="/" render={ () => <Search/> }/>
                <Route exact path="/results" render={ () => <Results/> }/>
            </Switch>   
        </Router>
    </Provider>         
)


ReactDOM.render(<Root />, document.getElementById('root'));
// registerServiceWorker();
