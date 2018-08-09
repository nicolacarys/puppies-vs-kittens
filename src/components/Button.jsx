import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button `
	margin: ${ props => props.battled ? '15px' : '5px' };
	padding: 5px 15px;
	border: 2px solid #2c59a3;
	border-radius: 15px;
	background-color: #2c59a3;
	font-size: 16px;
	font-weight: 500;
	letter-spacing: 1px;
	color: #fff;

	&:hover {
		background-color: #fff;
		color: #2c59a3;
	}
`;

export default ({ clickEvent, buttonText, battled }) => (
	<Button 
		onClick={ () => clickEvent() } 
		battled={ battled}>
		{ buttonText }
	</Button>
)