import React from 'react';
import { Link } from 'react-router-dom';
import { museum } from '../../Data';
import Scroll from '../../components/Scroll';
import { Ul, Li, Img, Hover, P } from './styles';
import PageHeaders from '../../components/PageHeaders';

const Gallery = ({ match }) => {
	const {
		params: { userName },
	} = match;

	return (
		<div style={{ backgroundColor: '#f5f5f5' }}>
			<PageHeaders>Gallery</PageHeaders>
			<Scroll>
				<Ul className='thumbnails'>
					{museum.map((room) =>
						room.floors === userName
							? room.rooms.map((r, i) => (
									<Li key={i}>
										<Link to={`/${r.url}`}>
											<Hover>
												<Img src={r.introImg} alt={`intro ${r.name}`} />
												<P>{r.name}</P>
											</Hover>
										</Link>
									</Li>
							  ))
							: match.path === '/gallery'
							? room.rooms.map((r, i) => (
									<Li key={i}>
										<Link to={`/${r.url}`}>
											<Hover>
												<Img src={r.introImg} alt={`intro ${r.name}`} />
												<P>{r.name}</P>
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
