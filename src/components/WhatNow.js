import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import img1 from '../images/WEB-6417--2000x1333--256kb.jpg';

// div parent
// transform: translate3d(0px, 0px, 0px);
//     display: flex;
//     height: 100%;
//     position: absolute;
//     will-change: transform;
//     justify-content: start;

// img
// width: 17%; //can vary depending on amount of images in array
//     /* background-color: red; */
//     /* margin: 40px; */
//     height: auto;
//     object-fit: contain;
//

const WhatNow = () => {
	const child = {
		width: `100vw`,
		height: `auto`,
		backgroundColor: 'red',

		margin: 40,
	};

	return (
		<>
			<h1 style={{ position: 'absolute', zIndex: 1 }}>Hello</h1>
			<div style={{ backgroundColor: 'aqua', height: '100vh' }}>
				<HorizontalScroll>
					<div style={child}>
						<div>
							<img style={{ height: '90%' }} src={img1} alt='' />
							<p>hello ser how are you</p>
							<img style={{ height: '70%' }} src={img1} alt='' />
						</div>
					</div>
					<div style={child}>
						<img style={{ height: '90%' }} src={img1} alt='' />
					</div>
					<div style={child}>
						<img style={{ height: '90%' }} src={img1} alt='' />
					</div>
				</HorizontalScroll>
			</div>
		</>
	);
};

export default WhatNow;
