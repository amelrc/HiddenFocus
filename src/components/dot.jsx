import React, { useState } from 'react';
import styled from 'styled-components';

import Enrico from '../images/INFL/WEB-Infl-1-Enrico-7435-255kb.jpg';
import Circles from '../images/INFL/WEB-Infl-1.1-Circles-67.1KB.jpg';
import Robert from '../images/INFL/WEB-Infl-2-Robert-Mann-33.3KB.jpg';
import Lawrence from '../images/INFL/WEB-Infl-3-Lawrence-2037-263kb.jpg';
import Laliberte from '../images/INFL/WEB-Infl-4-2037-Laliberte-258kb.jpg';
import Dorothy from '../images/INFL/WEB-Infl-5-8063-Dorothy-371kb.jpg';
import Carvalho from '../images/INFL/WEB-Infl-6-John-Carvalho-284kb.jpg';
import Amel from '../images/INFL/WEB-Infl-7-9517-Amel-274kb.jpg';
import Michelle from '../images/INFL/WEB-Infl-8-7570-Michelle-275kb.jpg';
import Cathy from '../images/INFL/WEB-Infl-9.-676-250kb.jpg';
import ImageSlider from './imageSlider';
import Image from './Image';

const info = [
	{
		date: '1000',
		image: [Enrico, Circles],
		name: 'Enrico',
		content:
			'The dashboard is your main homepage. It will display a feed of looks...',
	},
	{
		date: '2000',
		image: [Robert],
		name: 'Robert',
		content:
			'Discover allows you to find new looks, what is trending and search for looks, brands and users',
	},
	{
		date: '3000',
		image: [Lawrence],
		name: 'Lawrence',
		content: 'Discove',
	},
	{
		date: '4000',
		image: [Laliberte],
		name: 'Laliberte',
		content: 'Discove',
	},
	{
		date: '5000',
		image: [Dorothy],
		name: 'Dorothy',
		content: 'Discove',
	},
	{
		date: '6000',
		image: [Carvalho],
		name: 'Caravalho',
		content: 'Discove',
	},
	{
		date: '7000',
		image: [Amel],
		name: 'Amel',
		content: 'Discove',
	},
	{
		date: '8000',
		image: [Michelle],
		name: 'MIchelle',
		content: 'Discove',
	},
	{
		date: '9000',
		image: [Cathy],
		name: 'Cathy',
		content: 'Discove',
	},
];

const Dot = styled.div`
	background-color: red;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	border: solid gray 4px;
`;

const Test = () => {
	const [state, setState] = useState(info[0]);
	const [length, setLength] = useState(0);

	const handleNext = (i) => {
		console.log(i);
		setState(info[i]);
		setLength(i);
	};

	let width = 100 / (info.length - 1);

	return (
		<div style={{ width: '90%', alignSelf: 'center', position: 'relative' }}>
			<div>
				<div className='flex'>
					{state.image.length > 1 ? (
						<ImageSlider slides={info} />
					) : (
						<Image image={state.image} />
					)}
					<div>
						<h2>{state.name}</h2>
						<p>{state.content}</p>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						position: 'absolute',
						width: '100%',
					}}
				>
					<div
						style={{
							height: 4,
							backgroundColor: 'aqua',
							width: '100%',
							position: 'absolute',
						}}
					></div>
					<div
						style={{
							height: 4,
							backgroundColor: 'red',
							width: `calc(${width} * ${length}%)`,
							position: 'absolute',
						}}
					></div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%',
						marginTop: -8,
						position: 'absolute',
					}}
				>
					{/* {info.map((date, i) => (
					<span key={i}>{date.date}</span>
				))} */}
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%',
						marginTop: -8,
						position: 'absolute',
					}}
				>
					{info.map((date, i) => (
						<div key={i} className='flex column centerV'>
							<Dot onClick={() => handleNext(i)}></Dot>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Test;
