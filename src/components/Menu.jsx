import React from 'react';
import { Link } from 'react-router-dom';
import { galleries } from '../Data';

const Home = () => {
	return (
		<div>
			<h3>Menu Page</h3>
			<ul className='unlist'>
				<li>
					<Link to='/whatnow'>What Now</Link>
				</li>
			</ul>
			<ul className='unlist'>
				{galleries.map((gallery, i) => {
					return (
						<li key={i}>
							<Link to={`/menu/${gallery.belongsTo}`}>{gallery.belongsTo}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default Home;
