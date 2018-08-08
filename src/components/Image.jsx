import React from "react";
import styled from "styled-components";

const Image = styled.img `
	width: ${ props => props.battled ? '70%' : '90%' };
	height: ${ props => props.battled ? '400px' : '300px' };
	object-fit: cover;
`;

export default ({ imgSrc, imgAlt, battled }) => (
	<Image 
		src={ imgSrc } 
		alt={ imgAlt }
		battled={ battled }
	/>
)