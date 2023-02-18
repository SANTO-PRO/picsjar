import { useState } from 'react';

function SearchBar({ onSubmit }) {
	const [keyword, setKeyword] = useState();

	const handleFormSubmit = (event) => {
		event.preventDefault();

		onSubmit(keyword);
	};

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
			</form>
		</div>
	);
}

export default SearchBar;
