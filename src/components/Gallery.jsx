import React from 'react';
import { Link } from 'react-router-dom';
import { galleries } from '../Data';

const Gallery = ({ match }) => {
	const {
		params: { userName },
	} = match;
	console.log(match);

	return (
		<>
			<div>
				<h1>Gallery</h1>
				<ul className='unlist'>
					{galleries.map((gallery, i) =>
						gallery.belongsTo === userName ? (
							<li key={i}>
								<Link to={`/gallery/${gallery.belongsTo}/${gallery.name}`}>
									{gallery.name}
								</Link>
							</li>
						) : match.path === '/gallery' ? (
							<li>
								<Link to={`/gallery/${gallery.belongsTo}/${gallery.name}`}>
									{gallery.name}
								</Link>
							</li>
						) : null
					)}
				</ul>
			</div>
		</>
	);
};
export default Gallery;
