import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Main from './views/Main/Main';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

  render() {
    return (
			<HashRouter>
        <Switch>
          {[
            <Route path="/" name="Main" component={(props) =>  <Main {...props} /> } key="1"/>,
          ]}
        </Switch>
      </HashRouter>
    );
  }
}


export default App;