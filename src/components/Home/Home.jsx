import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Galleries from '../Galleries/Galleries';

const HeaderHome = styled.h1`
	text-align: left;
	font: normal normal 100 78px/40px Roxborough CF;
	color: #331c65;
	text-transform: capitalize;
`;
const SubTitle = styled.h4`
	text-align: left;
	font: normal normal normal 22px/27px Lato;
	color: #331c65;
	text-transform: capitalize;
`;
const Phrase = styled.h3`
	text-align: left;
	font: normal normal normal 46px/56px Mrs Saint Delafield;
	letter-spacing: 0px;
	color: #1c161f;
`;

const Home = () => {
	const test = () => {
		console.log('home image');
	};
	return (
		<>
			<div style={{ alignSelf: 'center' }}>
				<div>
					<HeaderHome>hidden focus</HeaderHome>
					<SubTitle>photography by ray hanson</SubTitle>
				</div>

				<Link onClick={test} to='/galleries'>
					<img src='https://via.placeholder.com/600x400.png/09f/fff' alt='1' />
				</Link>

				<Phrase>Each of our lives is a different way of seeing</Phrase>
			</div>
		</>
	);
};
export default Home;
