import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getRecordsQuery } from '../../queries/queries';
import RecordDetails from '../RecordDetails/RecordDetails';

class RecordsList extends Component {
	state = {
		selected: null
	};

	displayRecords() {
		var data = this.props.data;
		if (data.loading) {
			return <span>Loading...</span>;
		} else {
			return data.records.map((record) => {
				return (
					<li
						key={record.id}
						onClick={(e) => {
							this.setState({ selected: record.id });
						}}
					>
						{record.title}
					</li>
				);
			});
		}
	}
	render() {
		return (
			<div className="records-list">
				<ul>{this.displayRecords()}</ul>
				<RecordDetails recordId={this.state.selected} />
			</div>
		);
	}
}

export default graphql(getRecordsQuery)(RecordsList);
