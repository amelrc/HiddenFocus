import React, { useState } from 'react';
import {
	Container,
	SubHeader,
	Wrapper,
	ImageWrapper,
	FotoWrapper,
	PeoniesWrapper,
} from './styles';
import {
	RW,
	TA,
	Windhover,
	TAA,
	Peonies,
	PeoniesA,
	HTM,
	ITSOTN,
	UG,
	Alien,
	Animations,
	HTGO,
	Chrysanthemums,
	UL,
	Hydrangeas,
	HTMA,
	LOTF,
	HTRM,
} from './dataLatf';
import { objects1, objects2, objects3, objects4 } from './dataLatf';

import Modal from '../../components/Modal';
import PageHeaders from '../../components/PageHeaders';
import Scroll from '../../components/Scroll';
import W2555 from '../../images/LATF/WEB-2555-263kb.jpg';
import { IntroContainer, WrapperIntroText } from '../Lightscapes/styles';

const Latf = () => {
	const [showModal, setShowModal] = useState(false);
	const [selected, setSelected] = useState(0);

	const openModal = (id) => {
		setSelected(id);
		setShowModal((prev) => !prev);
	};

	return (
		<div style={{ backgroundColor: '#f5f5f5' }}>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<img style={{ width: '100%' }} src={selected.image} alt={selected.i} />
			</Modal>
			<PageHeaders>Look at the Flowers</PageHeaders>
			<Scroll>
				<IntroContainer>
					<WrapperIntroText>
						<p>
							Focus. When we look at something, really look, what captures our
							attention stands out in sharp relief. Everything else blurs away.
							These flower “portraits” are taken with a 100mm Macro lens, and
							make deliberate use of the focal plane as a major part of the
							composition, along with the placement of objects and blocks of
							color. The goal is to use all the elements of composition to
							invite the viewer to see the flowers in a particular way.
						</p>
						<br />
						<p>
							Together, these images make up an imaginary exhibition called Look
							at the Flowers… It is a still growing body of work that began in
							the Spring and Summer of 2019. When Spring came around this year,
							I wondered what would happen when I looked through the lens. Would
							anything “new” show up? Please take a look with me and see!
						</p>
					</WrapperIntroText>
					<ImageWrapper>
						<img src={W2555} width={'100%'} alt={W2555} />
					</ImageWrapper>
				</IntroContainer>

				{objects1.map((obj, i) => (
					<Container key={i}>
						<SubHeader>{obj.name}</SubHeader>
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

				<Container>
					<SubHeader>{RW.name}</SubHeader>
					<Wrapper style={{ flexWrap: 'nowrap', width: '80%' }}>
						{RW.page.map((el, i) => (
							<img
								key={i}
								style={el.css}
								onClick={() => openModal(el)}
								src={el.image}
								alt={i}
							/>
						))}
						<div>
							<p>
								<span style={{ font: '36px/28px Mrs Saint Delafield' }}>
									My
								</span>{' '}
								love for you is an evening star that glows once more toward the
								end of day
							</p>
							<p>
								My love for you is an ancient scar a gash in youth that bled
								away
							</p>
							<p>
								{' '}
								My love for you is the morning star the glint of light that
								leads the way
							</p>
						</div>
					</Wrapper>
				</Container>

				{objects2.map((obj, i) => (
					<Container key={i}>
						<SubHeader>{obj.name}</SubHeader>
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

				<Container>
					<SubHeader>{Windhover.name}</SubHeader>
					<Wrapper>
						{Windhover.p11.map((el, i) => (
							<img
								key={i}
								style={el.css}
								onClick={() => openModal(el)}
								src={el.image}
								alt={i}
							/>
						))}
					</Wrapper>
				</Container>

				<Container>
					<SubHeader>{TA.name}</SubHeader>
					<Wrapper>
						{TA.p12.map((el, i) => (
							<FotoWrapper>
								<img
									key={i}
									style={el.css}
									onClick={() => openModal(el)}
									src={el.image}
									alt={i}
								/>
							</FotoWrapper>
						))}
					</Wrapper>
				</Container>

				<Container>
					<SubHeader>{TAA.name}</SubHeader>
					<Wrapper>
						{TAA.p13.map((el, i) => (
							<img
								key={i}
								style={el.css}
								onClick={() => openModal(el)}
								src={el.image}
								alt={i}
							/>
						))}
					</Wrapper>
				</Container>
				<Container>
					<SubHeader>{Peonies.name}</SubHeader>
					<Wrapper>
						{Peonies.p14.map((el, i) => (
							<PeoniesWrapper>
								<img
									key={i}
									style={el.css}
									onClick={() => openModal(el)}
									src={el.image}
									alt={i}
								/>
							</PeoniesWrapper>
						))}
					</Wrapper>
				</Container>

				{objects3.map((obj, i) => (
					<Container key={i}>
						<SubHeader>{obj.name}</SubHeader>
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

				<Container>
					<SubHeader>{ITSOTN.name}</SubHeader>
					<Wrapper>
						{ITSOTN.p17.map((el, i) => (
							<img
								key={i}
								style={el.css}
								onClick={() => openModal(el)}
								src={el.image}
								alt={i}
							/>
						))}
						<p>{ITSOTN.text}</p>
					</Wrapper>
				</Container>

				{objects4.map((obj, i) => (
					<Container key={i}>
						<SubHeader>{obj.name}</SubHeader>
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

				{/* <Container>
          <SubHeader>{Tulips19.name}</SubHeader>
          <Wrapper>
            {Tulips19.p1.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={el.i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{Tulips20.name}</SubHeader>
          <Wrapper>
            {Tulips20.p2.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={el.i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{Tulips20A.name}</SubHeader>
          <Wrapper>
            {Tulips20A.p3.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{BAON.name}</SubHeader>
          <Wrapper>
            {BAON.p4.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{THOAA.name}</SubHeader>
          <Wrapper>
            {THOAA.p5.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{RW.name}</SubHeader>
          <Wrapper style={{ flexWrap: "nowrap", width: "80%" }}>
            {RW.p6.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
            <p>{RW.text}</p>
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{Intimations.name}</SubHeader>
          <Wrapper>
            {Intimations.p7.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{HC.name}</SubHeader>
          <Wrapper>
            {HC.p8.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{WOF.name}</SubHeader>
          <Wrapper>
            {WOF.p9.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{Annunciation.name}</SubHeader>
          <Wrapper>
            {Annunciation.p10.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        
       
        
        <Container>
          <SubHeader>{PeoniesA.name}</SubHeader>
          <Wrapper>
            {PeoniesA.p15.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{HTM.name}</SubHeader>
          <Wrapper>
            {HTM.p16.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        
        <Container>
          <SubHeader>{UG.name}</SubHeader>
          <Wrapper>
            <p>{UG.text}</p>
            {UG.p18.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{Alien.name}</SubHeader>
          <Wrapper>
            {Alien.p19.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{Animations.name}</SubHeader>
          <Wrapper>
            {Animations.p20.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{HTGO.name}</SubHeader>
          <Wrapper>
            {HTGO.p21.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{Chrysanthemums.name}</SubHeader>
          <Wrapper>
            {Chrysanthemums.p22.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{UL.name}</SubHeader>
          <Wrapper>
            {UL.p23.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{Hydrangeas.name}</SubHeader>
          <Wrapper>
            {Hydrangeas.p24.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{HTMA.name}</SubHeader>
          <Wrapper>
            {HTMA.p25.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{LOTF.name}</SubHeader>
          <Wrapper>
            <p>{LOTF.text}</p>
            {LOTF.p26.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container>
        <Container>
          <SubHeader>{HTRM.name}</SubHeader>
          <Wrapper>
            {HTRM.p27.map((el, i) => (
              <img
                key={i}
                style={el.css}
                onClick={() => openModal(el)}
                src={el.image}
                alt={i}
              />
            ))}
          </Wrapper>
        </Container> */}
			</Scroll>
		</div>
	);
};

export default Latf;
