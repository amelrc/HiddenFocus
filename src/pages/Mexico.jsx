import W0241 from '../images/GE/WEB-0241-281kb.jpg';
import W0291 from '../images/GE/WEB-0291-251kb.jpg';
import W0563 from '../images/GE/WEB-0563-247kb.jpg';
import W0789 from '../images/GE/WEB-0789-254kb.jpg';
import W0900 from '../images/GE/WEB-0900-247kb.jpg';
import W2169 from '../images/GE/WEB-2169-258kb.jpg';
import W2555 from '../images/GE/WEB-2555-263kb.jpg';
import W0762 from '../images/MX/WEB-0762-250kb.jpg';
import Contest from '../images/MX/WEB-Contest-Sign-251kb.jpg';

import React, { useRef, useState, useLayoutEffect, useCallback } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion';
import { Container, Wrapper, SubHeader } from '../pages/Latf/styles';
import Image from '../components/Image';
import { PageTransition } from './Home';
import ImageSlider from '../components/imageSlider';

export const MexicoData = [
	{ img: Contest, text: 'xmas' },
	{ img: W0762, text: 'olp' },
];
const Mexico = () => {
	const scrollRef = useRef(null);
	const ghostRef = useRef(null);
	const [scrollRange, setScrollRange] = useState(0);
	const [viewportW, setViewportW] = useState(0);

	useLayoutEffect(() => {
		scrollRef && setScrollRange(scrollRef.current.scrollWidth);
	}, [scrollRef]);

	const onResize = useCallback((entries) => {
		for (let entry of entries) {
			setViewportW(entry.contentRect.width);
		}
	}, []);

	useLayoutEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => onResize(entries));
		resizeObserver.observe(ghostRef.current);
		return () => resizeObserver.disconnect();
	}, [onResize]);

	const { scrollYProgress } = useViewportScroll();
	const transform = useTransform(
		scrollYProgress,
		[0, 1],
		[0, -scrollRange + viewportW]
	);
	const physics = { damping: 15, mass: 0.27, stiffness: 55 };
	const spring = useSpring(transform, physics);

	return (
		<>
			<motion.div
				initial='out'
				animate='in'
				exit='out'
				variants={PageTransition}
			>
				<div className='scroll-container flex column'>
					<h1
						className='flex'
						style={{
							position: 'absolute',
							zIndex: 1,
							height: '10%',
							margin: 'auto',
							alignItems: 'flex-end',
							width: '100%',
							justifyContent: 'center',
							font: 'normal normal 100 64px/40px Mrs Saint Delafield',
							color: '#331c65',
						}}
					>
						Look at the FLowers
					</h1>
					<motion.div
						className='thumbnails-container'
						ref={scrollRef}
						style={{ x: spring, padding: 0 }}
					>
						<Container style={{ flexDirection: 'row' }}>
							<div
								style={{
									display: 'flex',
									padding: 30,
									font: 'normal normal 300 18px/30px Lato',
									color: '#331c65',
								}}
							>
								<div>
									<p>
										The Flowers images’ first public showing came about
										unexpectedly.
									</p>
									<p>
										One day in mid July 2019, I was having lunch with my friend
										Bill at Como En Casa, a family style Mexican restaurant in
										my old downtown neighborhood. As lunch hour wound down, I
										took out three of my most recent prints to show Bill.
										Carlos, the ever alert proprietor, quickly came over to join
										us and have a look.
									</p>
									<p>
										“I like the last one most” said Carlos. Then he pointed over
										to the long wall, looked at me squarely and asked: “Ray,
										would you consider exhibiting your art here in my
										restaurant?” “Absolutely,” I replied without hesitation.
										“No, I’m serious,” he said, “please think about it.” “I
										have, Carlos, and the answer is Yes. Let’s do it!”
									</p>
								</div>
								<ImageSlider slides={MexicoData} />
							</div>
						</Container>
						<Container>
							<SubHeader>ggg</SubHeader>
							<Wrapper>
								<Image
									image={W2169}
									width={'16%'}
									alt={W2169}
									style={{ margin: 10 }}
								/>
								<Image
									image={W2555}
									width={'40%'}
									alt={W0900}
									style={{ margin: 40 }}
								/>
								<Image
									image={W0789}
									width={'26%'}
									alt={W0241}
									style={{ margin: 10 }}
								/>
								<Image
									image={W0900}
									width={'20%'}
									alt={W0563}
									style={{ margin: 10 }}
								/>

								<Image
									image={W0241}
									width={'20%'}
									alt={W0241}
									style={{ margin: 10 }}
								/>
								<Image
									image={W0563}
									width={'20%'}
									alt={W0291}
									style={{ margin: 10 }}
								/>
							</Wrapper>
						</Container>
					</motion.div>
				</div>
				<div ref={ghostRef} style={{ height: scrollRange }} className='ghost' />
			</motion.div>
		</>
	);
};

export default Mexico;
