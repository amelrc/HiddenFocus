import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';

const WhatNow = () => {
	const child = { width: `30em`, height: `100%`, backgroundColor: 'red' };

	return (
		<div style={{ backgroundColor: 'aqua', padding: 40 }}>
			<HorizontalScroll>
				<div style={child}>
					<h1>hello</h1>
				</div>
				<div style={child}>
					<h1>hello</h1>
				</div>
				<div style={child}>
					<h1>hello</h1>
				</div>
			</HorizontalScroll>
		</div>
	);
};

export default WhatNow;
