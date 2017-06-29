import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './common/home.component.jsx';
import CaseAdd from './case/case-add.component.jsx';
import CaseList from './case/case-list.component.jsx';
import PageNotFound from './common/notfound.component.jsx';
// Import routing components
//import {BrowserRouter as Router, Route, browserHistory} from 'react-router-dom';
import {BrowserRouter as Router, HashRouter, Route, browserHistory, Switch} from 'react-router-dom';

ReactDOM.render((
	 <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={CaseAdd} />
        <Route path="/list" component={CaseList} />
        <Route path="*" component={PageNotFound} />
      </Switch>
   </HashRouter >
), document.getElementById( 'app' ) );
