import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { getRecordsQuery } from '../../queries/queries';


class RecordsList extends Component {
	state = {};

	displayRecords() {
		var data = this.props.data;
		if (data.loading) {
			return <span>Loading...</span>;
		} else {
			return data.records.map((record) => {
				return <li key={record.id}>{record.title}</li>;
			});
		}
	}
	render() {
		return (
			<div className="records-list">
				<ul>{this.displayRecords()}</ul>
			</div>
		);
	}
}

export default graphql(getRecordsQuery)(RecordsList);
