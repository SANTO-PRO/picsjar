import searchImage from './api';
import SearchBar from './components/SearchBar';

function App() {
	const handleSubmit = (keyword) => {
		searchImage(keyword);
	};

	return (
		<div className="App">
			<SearchBar onSubmit={handleSubmit} />
		</div>
	);
}

export default App;
