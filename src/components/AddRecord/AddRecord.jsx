import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBandsQuery = gql`
	{
		bands {
			id
			name
			nation
		}
	}
`;

export class AddRecord extends Component {
	state = {};

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
					</select>
				</div>

				<button>Add record</button>
			</form>
		);
	}
}

export default AddRecord(getBandsQuery)(AddRecord);
