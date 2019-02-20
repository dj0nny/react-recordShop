import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import RecordsList from './components/RecordsList/RecordsList';
import AddRecord from './components/AddRecord/AddRecord';

import './App.css';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql'
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div className="App">
					<div className="container">
						<div className="columns">
							<div className="column is-12">
								<h1 className="title">React Record Shop</h1>
							</div>
						</div>
						<div className="records-list">
							<div className="columns">
								<RecordsList />
							</div>
						</div>
						<AddRecord />
					</div>
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
