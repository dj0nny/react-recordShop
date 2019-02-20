import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getRecordQuery } from '../../queries/queries';

class RecordDetails extends Component {
	displayRecordDetails() {
		const { record } = this.props.data;
		if (record) {
			return (
				<div className="details">
					<h2>{record.title}</h2>
					<p>{record.genre}</p>
					<p>{record.releaseYear}</p>
					<p>{record.band.name}</p>
					<p>All records of this band:</p>
					<ul className="other-records">
						{record.band.records.map((item) => {
							return <li key={item.id}>{item.title}</li>;
						})}
					</ul>
				</div>
			);
		} else {
			return (
			<div className="notification is-danger">
				No record selected
			</div>
			);
		}
	}
	render() {
		return <div id="book-details">{this.displayRecordDetails()}</div>;
	}
}

export default graphql(getRecordQuery, {
	options: (props) => {
		return {
			variables: {
				id: props.recordId
			}
		};
	}
})(RecordDetails);
