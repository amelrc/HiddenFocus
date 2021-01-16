import W0001 from '../images/GE/WEB-0001-251kb.jpg';
import W7897 from '../images/GE/WEB-2N7A7897-255kb.jpg';
import W8110 from '../images/GE/WEB-2N7A8110-282kb.jpg';
import W8251 from '../images/GE/WEB-2N7A8251-250kb.jpg';
import W0241 from '../images/GE/WEB-0241-281kb.jpg';
import W0291 from '../images/GE/WEB-0291-251kb.jpg';
import W0403 from '../images/GE/WEB-0403-250ob.jpg';
import W0563 from '../images/GE/WEB-0563-247kb.jpg';
import W0769 from '../images/GE/WEB-0769-255.jpg';
import W0789 from '../images/GE/WEB-0789-254kb.jpg';
import W0831 from '../images/GE/WEB-0831-252kb.jpg';
import W0900 from '../images/GE/WEB-0900-247kb.jpg';
import W0921 from '../images/GE/WEB-0921-258kb.jpg';
import W0995 from '../images/GE/WEB-0995-249kb.jpg';
import W1384 from '../images/GE/WEB-1384-312kb.jpg';
import W1669 from '../images/GE/WEB-1669-254kb.jpg';
import W2169 from '../images/GE/WEB-2169-258kb.jpg';
import W2421 from '../images/GE/WEB-2421-254kb.jpg';
import W2555 from '../images/GE/WEB-2555-263kb.jpg';
import W2613 from '../images/GE/WEB-2613-257kb.jpg';
import W8175 from '../images/GE/WEB-8175-256kb.jpg';
import W8782 from '../images/GE/WEB-8782-259kb.jpg';
import React, { useRef, useState, useLayoutEffect, useCallback } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion';
import { Container, Wrapper, SubHeader } from '../pages/Latf';
import Image from '../components/Image';
import { PageTransition } from './Home';

const Enescu = () => {
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
						George Enescu's Secret Garden
					</h1>
					<motion.div
						className='thumbnails-container'
						ref={scrollRef}
						style={{ x: spring, padding: 0 }}
					>
						<Container style={{ flexDirection: 'row' }}>
							<div
								style={{
									width: '35%',
									padding: 30,
									font: 'normal normal 300 18px/30px Lato',
									color: '#331c65',
								}}
							>
								<p>
									I began taking "portraits" of flowers in the Spring of 2019. 
									By summer, they had grown into a body of work called "Look at
									the Flowers..." and, in the fall, became the subject of four
									local exhibits (insert link to Shows/Look at the Flowers).  As
									winter unfolded, I began to wonder what would show up through
									the lens come Spring.  Would the 2020 blossoms look the same?
								</p>
								<p>
									"Homage to Monet" appeared on the first photo-shoot of Spring,
									and radiated the answer: the possibilities, even within the
									confines of my small garden, are infinite. 
								</p>
								<p>
									The visual feel of this image and of others soon to follow is
									decidedly watercolor.  Since the distinctive medium for all
									these images is light, I've settled on a new name to describe
									them: "Lightscapes."
								</p>
							</div>
							<div
								className='flex column'
								style={{ width: '40%', alignItems: 'center' }}
							>
								<Image image={W0001} width={'70%'} alt={W0001} />
								<p
									style={{
										font: 'normal normal 300 18px/30px Lato',
										color: '#331c65',
									}}
								>
									"Homage to Monet"
								</p>
							</div>
						</Container>
						<Container>
							<SubHeader>ggg</SubHeader>
							<Wrapper>
								<Image
									image={W0241}
									width={'20%'}
									alt={W0241}
									style={{ margin: 10 }}
								/>
								<Image
									image={W0291}
									width={'40%'}
									alt={W0291}
									style={{ margin: 10 }}
								/>
								<Image
									image={W0563}
									width={'20%'}
									alt={W0563}
									style={{ margin: 10 }}
								/>
								<Image
									image={W0900}
									width={'20%'}
									alt={W0900}
									style={{ margin: 10 }}
								/>
								<Image
									image={W2169}
									width={'20%'}
									alt={W2169}
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

export default Enescu;
