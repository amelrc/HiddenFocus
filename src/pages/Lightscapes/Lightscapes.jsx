import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	WrapperIntroText,
	IntroContainer,
	ImageWrapper,
	FigCaption,
	Wrapper,
} from './styles';
import Scroll from '../../components/Scroll';
import PageHeaders from '../../components/PageHeaders';
import Modal from '../../components/Modal';
import { LS } from '../../Data';
import LS1 from '../../images/LS/WEB-LS1-RAY-3838-249kb.jpg';
import { Container } from '../Latf/styles';

const Lightscapes = () => {
	const [showModal, setShowModal] = useState(false);
	const [selected, setSelected] = useState(0);

	const openModal = (id) => {
		setSelected(id);
		setShowModal((prev) => !prev);
	};
	return (
		<div style={{ backgroundColor: '#f5f5f5' }}>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<img style={{ width: '100%' }} src={selected.img} alt={selected.i} />
			</Modal>
			<PageHeaders>Lightscapes</PageHeaders>
			<Scroll>
				<IntroContainer>
					<WrapperIntroText>
						<p>
							I began taking "portraits" of flowers in the Spring of 2019.  By
							summer, they had grown into a body of work called{' '}
							<Link to='look-at-the-flowers'>"Look at the Flowers..."</Link>{' '}
							and, in the fall, became the subject of four local exhibits.  As
							winter unfolded, I began to wonder what would show up through the
							lens come Spring.  Would the 2020 blossoms look the same?
						</p>
						<br />
						<p>
							"Homage to Monet" appeared on the first photo-shoot of Spring, and
							radiated the answer: the possibilities, even within the confines
							of my small garden, are infinite. 
						</p>
						<br />
						<p>
							The visual feel of this image and of others soon to follow is
							decidedly watercolor.  Since the distinctive medium for all these
							images is light, I've settled on a new name to describe them:
							"Lightscapes."
						</p>
					</WrapperIntroText>
					<ImageWrapper>
						<img src={LS1} width={'100%'} alt={LS1} />
						<FigCaption>"Homage to Monet"</FigCaption>
					</ImageWrapper>
				</IntroContainer>

				{LS.map((el, i) => (
					<Container
						key={i}
						style={
							el.text !== ''
								? { backgroundColor: 'antiquewhite' }
								: { backgroundColor: 'none' }
						}
					>
						<Wrapper className='column'>
							<img
								onClick={() => openModal(el)}
								src={el.img}
								alt={i.img}
								style={el.css}
							/>
							{el.text === '' ? (
								<p>{el.text}</p>
							) : (
								<FigCaption>"{el.text}"</FigCaption>
							)}
						</Wrapper>
					</Container>
				))}
			</Scroll>
		</div>
	);
};

export default Lightscapes;
