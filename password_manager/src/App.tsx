import React from 'react';
import { Container } from '@material-ui/core';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App: React.FC = () => {
  return (
    <HashRouter>
		<Container maxWidth="lg">
			<Switch>
				<Route path="/" exact component={Auth}/>
				<Route path="/home" exact component={Home}/>
			</Switch>
		</Container>
	</HashRouter>
  );
}

export default App;
