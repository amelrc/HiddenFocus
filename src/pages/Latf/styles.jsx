import styled from 'styled-components';
import { device } from '../../generalStyles';

export const Container = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
`;

export const FotoWrapper = styled.div`
	display: flex;
	justify-content: center;
`;
export const PeoniesWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const Wrapper = styled.div`
	display: flex;
	// flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	height: 80%;
	${FotoWrapper}:nth-child(2) {
		width: 50%;
	}
	${FotoWrapper}:nth-child(3) {
		width: 50%;
	}
	${PeoniesWrapper}:nth-child(2) {
		width: 50%;
	}
	${PeoniesWrapper}:nth-child(3) {
		width: 50%;
	}
`;

export const SubHeader = styled.h2`
	margin: 0;
	font: 300 16px/16px Lato;
	color: #331c65;
`;

export const ImageWrapper = styled.figure`
	width: fit-content;
	height: fit-content;
	align-items: center;
	background-color: antiquewhite;
	padding: 20px;
	max-width: 30%;
	display: flex;
	flex-direction: column;
	align-self: center;
	@media ${device.medium} {
		padding: 30px;
		max-width: 30%;
	}
`;
