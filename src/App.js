import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import RecordsList from './components/RecordsList/RecordsList';

import './App.css';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql'
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div className="App">
					<div className="main">
						<div className="row">
							<div className="columns medium-12 text-center">
								<h1>React Record Shop</h1>
							</div>
						</div>
						<RecordsList />
					</div>
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
