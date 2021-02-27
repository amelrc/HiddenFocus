import React, { useRef } from 'react';
import styled from 'styled-components';

const Background = styled.div`
	width: 100%;
	height: 100%;
	background: #180920;
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 94%;
	position: fixed;
	top: 0;
`;
const ImageWrapper = styled.div`
	width: 80%;
	height: 80%;
	display: flex;
	justify-content: center;
`;

const Modal = ({ showModal, setShowModal, children }) => {
	const modalRef = useRef();
	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};
	return (
		<>
			{showModal ? (
				<Background onClick={closeModal} ref={modalRef}>
					<CloseWrapper>
						<p onClick={() => setShowModal((prev) => !prev)}>Close</p>
					</CloseWrapper>
					<ImageWrapper showModal={showModal}>{children}</ImageWrapper>
				</Background>
			) : null}
		</>
	);
};

export default Modal;
