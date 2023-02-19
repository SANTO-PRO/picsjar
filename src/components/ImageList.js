import ImageShow from './ImageShow';

function ImageList({ images }) {
	const renderedImage = images.map((image) => {
		return <ImageShow image={image} key={image.id} />;
	});

	return <div className="imageContainer">{renderedImage}</div>;
}

export default ImageList;
