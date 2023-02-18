import axios from 'axios';

const searchImage = async (keyword) => {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		headers: {
			Authorization: 'Client-ID CmuH5tckSje2g5rFzvyZfF2YxEA2qRBcoWBudNGEYVI',
		},

		params: {
			query: keyword,
		},
	});

	return response.data.results;
};

export default searchImage;
