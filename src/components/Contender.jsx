import React from "react";
import styled from 'styled-components';
import Image from "./Image";

const ContenderCard = styled.div `
	display: flex;
	width: 50%;
	flex-direction: column;
	align-items: center;
`;

export default ({ containerClass, imgSrc, imgAlt, name, likes, ferocity }) => (
	<ContenderCard className={ containerClass }>
		<Image 
			imgSrc={ imgSrc } 
			imgAlt={ imgAlt }
		/>
		<ul className="animal-stats">
			<li><b>Name: </b>{ name }</li>
			<li><b>Likes: </b>{ likes }</li>
			<li><b>Ferocity rating: </b>{ ferocity }</li>
		</ul>
	</ContenderCard>
)