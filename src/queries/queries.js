import { gql } from 'apollo-boost';

const getRecordsQuery = gql`
	{
		records {
			id
			title
			genre
			releaseYear
		}
	}
`;

const getBandsQuery = gql`
	{
		bands {
			id
			name
			nation
		}
	}
`;

const addRecordMutation = gql`
	mutation($title: String!, $genre: String!, $releaseYear: Int, $bandID: ID!) {
		addRecord(title: $title, genre: $genre, releaseYear: $releaseYear, bandID: $bandID) {
			title
			id
		}
	}
`;

export { getRecordsQuery, getBandsQuery, addRecordMutation };
