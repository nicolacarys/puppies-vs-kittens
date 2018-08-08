import React from "react";
import styled from 'styled-components';
import Button from './Button';
import Image from './Image';

const ResultContainer = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;	
`;

export default ({ victoryText, imgSrc, imgAlt, reset, battled }) => (
	<ResultContainer>
		<h1>{ victoryText }</h1>
		<Image
			imgSrc={ imgSrc }
			imgAlt={ imgAlt }
			battled={ battled }
		/>
		<Button 
			clickEvent={ reset }
			classes="button button-reset"
			buttonText="Play again"
			battled={ battled }
		/>
	</ResultContainer>
)