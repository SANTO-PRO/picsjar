//=> App:
import { useState } from 'react';
import searchImage from './api';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';

function App() {
	const [images, setImages] = useState([]);

	const handleSubmit = async (keyword) => {
		const result = await searchImage(keyword);

		setImages(result);
	};

	return (
		<div className="App">
			<SearchBar onSubmit={handleSubmit} />
			<ImageList images={images} />
		</div>
	);
}

export default App;

//=> Search Bar:

function SearchBar({ onSubmit }) {
	const [keyword, setKeyword] = useState('');

	const handleFormSubmit = (event) => {
		event.preventDefault();

		onSubmit(keyword);
	};

	const handleChange = (event) => {
		setKeyword(event.target.value);
	};

	return (
		<div className="searchCard">
			<form onSubmit={handleFormSubmit}>
				<label>
					Search Photos:
					<input
						className="inputField"
						value={keyword}
						onChange={handleChange}
					/>
				</label>
			</form>
		</div>
	);
}

export default SearchBar;



//=> ImageList:
import ImageShow from './ImageShow';

function ImageList({ images }) {
	const renderedImage = images.map((image) => {
		return <ImageShow image={image} key={image.id} />;
	});

	return <div className="imageContainer">{renderedImage}</div>;
}
export default ImageList;


//=> ImageShow:
function ImageShow({ image }) {
	return (
		<div className="imageCard">
			<img src={image.urls.small} alt={image.alt_description} />
		</div>
	);
}
export default ImageShow;

//=> API:
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
