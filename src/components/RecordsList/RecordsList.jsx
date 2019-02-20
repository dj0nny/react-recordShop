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
					<div
						className="column is-12 record"
						key={record.id}
						onClick={(e) => {
							this.setState({ selected: record.id });
						}}
					>
						<h2 className="record-title">{record.title}</h2>
					</div>
				);
			});
		}
	}
	render() {
		return (
			<React.Fragment>
				<div className="column is-6">{this.displayRecords()}</div>
				<div className="column is-6">
					<RecordDetails recordId={this.state.selected} />
				</div>
			</React.Fragment>
		);
	}
}

export default graphql(getRecordsQuery)(RecordsList);
