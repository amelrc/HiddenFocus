import W0001 from '../../images/GE/WEB-0001-251kb.jpg';
import W0921 from '../../images/GE/WEB-0921-258kb.jpg';
import W0995 from '../../images/GE/WEB-0995-249kb.jpg';
import W8782 from '../../images/GE/WEB-8782-259kb.jpg';

import React, { useState } from 'react';
import { Container, Wrapper, SubHeader } from '../Latf/styles';

import ImageSlider from '../../components/imageSlider';
import PageHeaders from '../../components/PageHeaders';
import Modal from '../../components/Modal';
import Scroll from '../../components/Scroll';
import { EnescuObject } from './dataEnescu';
import { IntroContainer, WrapperIntroText } from '../Lightscapes/styles';

export const EnescuData = [
	{ img: W0001, text: 'xmas', css: { width: '40%', position: 'absolute' } },
	{ img: W0995, text: 'olp', css: { width: '40%', position: 'absolute' } },
	{ img: W0921, text: 'pass', css: { width: '40%', position: 'absolute' } },
	{ img: W8782, text: 'venice', css: { width: '40%', position: 'absolute' } },
];
const Enescu = () => {
	const [showModal, setShowModal] = useState(false);
	const [selected, setSelected] = useState(0);

	const openModal = (id) => {
		setSelected(id);
		setShowModal((prev) => !prev);
	};

	return (
		<>
			<div className='scroll-container flex column'>
				<Modal showModal={showModal} setShowModal={setShowModal}>
					<img style={{ width: '100%' }} src={selected.image} alt={selected} />
				</Modal>
				<PageHeaders>George Enescu's Secret Garden</PageHeaders>
				<Scroll>
					<Container style={{ flexDirection: 'row' }}>
						<IntroContainer>
							<WrapperIntroText>
								<p>
									“What’s the connection between your flower pictures and
									Enescu’s music?” asked the Festival’s producer.
								</p>
								<br />
								<p>
									The answer lay in the imagination of each concertgoer. I would
									call the exhibits “George Enescu’s Secret Garden,” and invite
									viewers to “give the pictures a name that would make Enescu
									smile.”
								</p>
								<br />
								<p>
									Some 225 to 275 people attended each concert, and 12% to 15%
									of them were intrigued enough to fill out a “Name the Picture”
									ballot!
								</p>
								<br />
								<p>
									The winning names are highlighted on the next three pages. 
								</p>
							</WrapperIntroText>

							<ImageSlider
								styles={{
									display: 'flex',
									width: '30%',
									justifyContent: 'space-between',
								}}
								slides={EnescuData}
							/>
						</IntroContainer>
					</Container>
					{EnescuObject.map((obj, i) => (
						<Container key={i}>
							<p>{obj.name}</p>
							<Wrapper>
								{obj.page.map((el, i) => (
									<img
										key={i}
										style={el.css}
										onClick={() => openModal(el)}
										src={el.image}
										alt={el.i}
									/>
								))}
								<p>{obj.text}</p>
							</Wrapper>
						</Container>
					))}
				</Scroll>
			</div>
		</>
	);
};

export default Enescu;
