import { useState } from 'react';

function SearchBar({ onSubmit }) {
	const [keyword, setKeyword] = useState();

	const handleFormSubmit = (event) => {
		event.preventDefault();

		onSubmit(keyword);
	};

	const handleChange = (event) => {
		setKeyword(event.target.value);
	};

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<input value={keyword} onChange={handleChange} />
			</form>
		</div>
	);
}

export default SearchBar;
