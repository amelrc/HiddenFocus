import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import Logo from '../images/AC-logo.png';
// import { Menu } from './menu';
// import { Burger } from './burger';

// const AClogo = styled.img`
// 	width: 60px;
// 	top: 1em;
// 	left: 2rem;
// 	cursor: ${({ open }) => (open ? 'initial' : 'pointer')};
// 	position: absolute;
// 	opacity: ${({ open }) => (open ? '0' : '1')};
// `;
const HeaderWrapper = styled.div`
	height: 70px;
	width: 98%;
	position: fixed;
	top: 0;
`;
export const Header = (props) => {
	const { open, setOpen } = props;
	return (
		<>
			<HeaderWrapper>
				<NavLink to='/'>
                    {/* <AClogo open={open} src={} alt='logo' /> */}
                    <h1>logo</h1>
				</NavLink>
				<div>
					{/* <Burger open={open} setOpen={setOpen} />
					<Menu open={open} setOpen={setOpen} /> */}
				</div>
			</HeaderWrapper>
		</>
	);
};
