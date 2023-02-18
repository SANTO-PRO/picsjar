import { useState } from 'react';

function SearchBar({ onSubmit }) {
	const [inputValue, setinputValue] = useState();

	const handleFormSubmit = (event) => {
		event.preventDefault();

		onSubmit(inputValue);
	};

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<input onChange={(e) => setinputValue(e.target.value)} />
			</form>
		</div>
	);
}

export default SearchBar;
