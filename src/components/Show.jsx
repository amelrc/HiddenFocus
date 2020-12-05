import React from 'react';
import { galleries } from '../Data';

const Show = ({ match }) => {
	const {
		params: { tabName },
	} = match;

	const show = galleries.find(({ name }) => name === tabName);

	return (
		<div style={{ backgroundColor: 'lightgreen' }}>
			<ul className='unlist'>
				{show.galleries.map((gallery, i) => {
					return <div key={i}>{gallery.img}</div>;
				})}
			</ul>
		</div>
	);
};

export default Show;
