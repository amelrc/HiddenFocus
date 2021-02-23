import styled from 'styled-components';
import { device } from '../../generalStyles';
import { Chrysanthemums } from './dataLatf';

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

export const ChrysanthemumsWrapper = styled.div`
	display: flex;
	justify-content: center;
`;
export const HydrangeasWrapper = styled.div`
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
	${ChrysanthemumsWrapper}:nth-child(1) {
		width: 50%;
	}
	${ChrysanthemumsWrapper}:nth-child(2) {
		width: 50%;
	}
	${HydrangeasWrapper}:nth-child(1) {
		width: 50%;
	}
	${HydrangeasWrapper}:nth-child(2) {
		width: 50%;
	}
	${HydrangeasWrapper}:nth-child(3) {
		width: 50%;
	}
`;

export const SubHeader = styled.h2`
	margin: 0;
	font: 300 2vw/16px Lato;
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

export const RWImage = styled.img`
	width: 64%;
	margin: 10px;
	@media ${device.tablet} {
		margin: 0 10px 100px;
	}
	@media ${device.small} {
		width: 70%;
		margin: 0 10px 140px;
	}
`;
export const RWText = styled.div`
	font: 14px / 18px Lato;
	color: #331c65;
	width: 30%;
	margin: 60px 0 0 10px;
	@media ${device.tablet} {
		font: 16px / 24px Lato;
		width: 22%;
	}
`;
export const SingleImage = styled.img`
	width: 60%;
	@media ${device.tablet} {
		width: 80%;
	}
`;
export const VerticalImage = styled.img`
	width: 28%;
	@media ${device.tablet} {
		width: 36%;
	}
`;
export const LiliesText = styled.div`
	width: 50%;
	font: 14px / 18px Lato;
	color: #331c65;
	text-align: end;
`;

export const SunflowerImage = styled.img`
	//image carries style
	&:after {
		content: 'Angkor Wat';
		position: relative;
		left: 100%;
		bottom: 22px;
		color: #331c65;
		margin-left: 10px;
		font-size: 16px;
	}
`;
