import SearchBar from './components/SearchBar';

function App() {
	const handleSubmit = (keyword) => {
		console.log('Search with keyword', keyword);
	};

	return (
		<div className="App">
			<SearchBar onSubmit={handleSubmit} />
		</div>
	);
}

export default App;
