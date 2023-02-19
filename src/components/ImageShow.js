function ImageShow({ image }) {
	return (
		<div className="imageCard">
			<img src={image.urls.small} alt={image.alt_description} />
		</div>
	);
}

export default ImageShow;
