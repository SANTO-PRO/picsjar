import { useState } from 'react';
import searchImage from './api';
import ImageList from './components/ImageList';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';

function App() {
	const [images, setImages] = useState([]);

	const handleSubmit = async (keyword) => {
		const result = await searchImage(keyword);

		setImages(result);
	};

	return (
		<div className="app">
			<Navbar />
			<SearchBar onSubmit={handleSubmit} />
			<ImageList images={images} />
		</div>
	);
}

export default App;
