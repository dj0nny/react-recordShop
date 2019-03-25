import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getBandsQuery, addRecordMutation, getRecordsQuery } from '../../queries/queries';

export class AddRecord extends Component {
	state = {
		title: '',
		genre: '',
		year: -1,
		band: ''
	};

	displayBand() {
		var data = this.props.getBandsQuery;
		if (data.loading) {
			return <option disabled>Loading bands</option>;
		} else {
			return data.bands.map((band) => {
				return (
					<option key={band.id} value={band.id}>
						{band.name}
					</option>
				);
			});
		}
	}

	submitForm = (e) => {
		e.preventDefault();
		this.props.addRecordMutation({
			variables: {
				title: this.state.title,
				genre: this.state.genre,
				releaseYear: this.state.year,
				bandID: this.state.band
			},
			refetchQueries: [
				{
					query: getRecordsQuery
				}
			]
		});
	};

	render() {
		return (
			<React.Fragment>
				<h3 className="title">Add new record</h3>
				<form id="add-record" onSubmit={(e) => this.submitForm(e)}>
					<div class="field">
						<label className="label">Record title:</label>
						<div className="control">
							<input className="input" type="text" onChange={(e) => this.setState({ title: e.target.value })} />
						</div>
					</div>
					<div class="field">
						<label className="label">Genre:</label>
						<div className="control">
							<input className="input"type="text" onChange={(e) => this.setState({ genre: e.target.value })} />
						</div> 
					</div>
					<div class="field">
						<label className="label">Year:</label>
						<div className="control">
							<input className="input" type="number" onChange={(e) => this.setState({ year: parseInt(e.target.value) })} />
						</div>
					</div>
					<div class="field">
						<label className="label">Band:</label>
						<div className="control">
							<select className="select" onChange={(e) => this.setState({ band: e.target.value })}>
								<option>Select the band</option>
								{this.displayBand()}
							</select>
						</div>
					</div>
					<button className="button">Add record</button>
				</form>
			</React.Fragment>
		);
	}
}

export default compose(
	graphql(getBandsQuery, { name: 'getBandsQuery' }),
	graphql(addRecordMutation, { name: 'addRecordMutation' })
)(AddRecord);
