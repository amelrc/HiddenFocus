import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { galleries } from '../Data';
import { museum } from '../Data';
import { PageTransition } from './Home';

const Gallery = ({ match }) => {
	const {
		params: { userName },
	} = match;

	const test = museum.map((room) =>
		room.rooms.map((r, i) => <div>{r.name}</div>)
	);

	return (
		<>
			<motion.div
				initial='out'
				animate='in'
				exit='out'
				variants={PageTransition}
			>
				<h1>Gallery</h1>
				<ul>
					{/* <div>{test}</div> */}
					{museum.map((room) =>
						room.floors === userName
							? room.rooms.map((r, i) => (
									<li key={i}>
										<Link to={`/${r.name}`}>{r.name}</Link>
									</li>
							  ))
							: match.path === '/gallery'
							? room.rooms.map((r, i) => (
									<li key={i}>
										<Link to={`/${r.name}`}>{r.name}</Link>
									</li>
							  ))
							: null
					)}

					{/* //// */}

					{/* {galleries.map((gallery, i) =>
						gallery.belongsTo === userName ? (
							<li key={i}>
								<Link to={`/gallery/${gallery.belongsTo}/${gallery.name}`}>
									{gallery.name}
								</Link>
							</li>
						) : match.path === '/gallery' ? (
							<li key={i}>
								<Link to={`/gallery/${gallery.belongsTo}/${gallery.name}`}>
									{gallery.name}
								</Link>
							</li>
						) : null
					)} */}
				</ul>
			</motion.div>
		</>
	);
};
export default Gallery;
