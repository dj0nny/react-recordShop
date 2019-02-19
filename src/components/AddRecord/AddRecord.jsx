import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { getBandsQuery } from '../../queries/queries';

export class AddRecord extends Component {
	displayBand() {
		var data = this.props.data;
		if (data.loading) {
			return <option disabled>Loading bands</option>;
		} else {
			return data.bands.map((band) => {
				return <option key={band.id}>{band.name}</option>;
			});
		}
	}

	render() {
		return (
			<form id="add-record">
				<div className="form-field">
					<label>Record name:</label>
					<input type="text" />
				</div>
				<div className="form-field">
					<label>Genre:</label>
					<input type="text" />
				</div>
				<div className="form-field">
					<label>Band:</label>
					<select>
						<option>Select the band</option>
						{this.displayBand()}
					</select>
				</div>

				<button>Add record</button>
			</form>
		);
	}
}

export default graphql(getBandsQuery)(AddRecord);
