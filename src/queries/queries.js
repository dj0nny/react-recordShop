import {gql} from 'apollo-boost';

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

export {getRecordsQuery, getBandsQuery};