import styled from 'styled-components';
import { device } from '../../generalStyles';

export const IntroContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-self: flex-end;
	justify-content: center;
	width: 100vw;
	height: 80%;
	@media ${device.small} {
		align-items: center;
	}
`;

export const Left = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Right = styled.div`
	width: 30%;
`;
