import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { imagesWN, textWN } from '../Data';

const variants = {
	enter: (direction) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset, velocity) => {
// 	return Math.abs(offset) * velocity;
// };

const Slider = () => {
	const [[page, direction], setPage] = useState([0, 0]);
	const imageIndex = wrap(0, imagesWN.length, page);
	const textIndex = wrap(0, textWN.length, page);

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<>
			<AnimatePresence initial={false} custom={direction}>
				<div
					style={{
						backgroundColor: 'aliceblue',
						padding: 30,
						justifyContent: 'center',
						display: 'flex',
					}}
				>
					<motion.img
						className='sliderImage'
						key={page}
						src={imagesWN[imageIndex]}
						custom={direction}
						variants={variants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 30 },
							opacity: { duration: 0.8 },
						}}
						// drag="x"
						// dragConstraints={{ left: 0, right: 0 }}
						// dragElastic={1}
						// onDragEnd={(e, { offset, velocity }) => {
						//   const swipe = swipePower(offset.x, velocity.x);

						//   if (swipe < -swipeConfidenceThreshold) {
						//     paginate(1);
						//   } else if (swipe > swipeConfidenceThreshold) {
						//     paginate(-1);
						//   }
						// }}
					/>
				</div>
			</AnimatePresence>
			<p>{textWN[textIndex]}</p>
			<div
				style={{
					display: 'flex',
					width: '100%',
					justifyContent: 'space-around',
					position: 'absolute',
					zIndex: 1,
					height: '50%',
					alignItems: 'center',
				}}
			>
				<div className='prev' onClick={() => paginate(-1)}>
					{'‣'}
				</div>
				<div className='next' onClick={() => paginate(1)}>
					{'‣'}
				</div>
			</div>
		</>
	);
};
export default Slider;
