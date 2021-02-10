import React from 'react';
import { Link } from 'react-router-dom';
import { museum } from '../../Data';
import Scroll from '../../components/Scroll';
import { Ul, Li, Img, H1, Hover, P } from './styles';

const Gallery = ({ match }) => {
	const {
		params: { userName },
	} = match;

	return (
		<div style={{ backgroundColor: '#f5f5f5' }}>
			<H1>Gallery</H1>
			<Scroll>
				<Ul className='thumbnails'>
					{museum.map((room) =>
						room.floors === userName
							? room.rooms.map((r, i) => (
									<Li key={i}>
										<Link to={`/${r.url}`}>
											<Img src={r.introImg} alt={`intro ${r.name}`} />
											<P>{r.name}</P>
										</Link>
									</Li>
							  ))
							: match.path === '/gallery'
							? room.rooms.map((r, i) => (
									<Li key={i}>
										<Link to={`/${r.url}`}>
											<Hover
												style={{ position: 'relative' }}
												className='img__wrap'
											>
												<Img src={r.introImg} alt={`intro ${r.name}`} />
												<P className='img__description'>{r.name}</P>
											</Hover>
										</Link>
									</Li>
							  ))
							: null
					)}
				</Ul>
			</Scroll>
		</div>
	);
};
export default Gallery;
