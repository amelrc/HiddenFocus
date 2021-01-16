import React, { useState } from 'react';
// import { SliderData } from './SliderData';
import { imagesWN, textWN } from '../Data';
import styled from 'styled-components';
import Image from './Image';

const Slider = styled.section`
	 {
		position: relative;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const ArrowRight = styled.div`
	 {
		position: absolute;
		top: 50%;
		right: 32px;
		font-size: 3rem;
		color: #000;
		z-index: 10;
		cursor: pointer;
		user-select: none;
	}
`;

const ArrowLeft = styled.div`
	 {
		position: absolute;
		top: 50%;
		left: 32px;
		font-size: 3rem;
		color: #000;
		z-index: 10;
		cursor: pointer;
		user-select: none;
	}
`;

// .slide {
//   opacity: 0;
//   transition-duration: 1s ease;
// }

// .slide.active {
//   opacity: 1;
//   transition-duration: 1s;
//   transform: scale(1.08);
// }

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<Slider>
			<ArrowLeft onClick={prevSlide} />
			<ArrowRight onClick={nextSlide} />
			{imagesWN.map((slide, index) => {
				return (
					<div
						// className={index === current ? 'slide active' : 'slide'}
						key={index}
					>
						{index === current && <Image image={slide} alt='travel' />}
					</div>
				);
			})}
		</Slider>
	);
};

export default ImageSlider;
