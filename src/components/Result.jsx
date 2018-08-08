import React from "react";
import Button from './Button';

export default ({ victoryText, imgSrc, imgAlt, reset }) => (
	<div>
		<h1>{ victoryText }</h1>
		<img 
			src={ imgSrc }
			alt={ imgAlt }
		/>
		<Button 
			clickEvent={ reset }
			classes="button button-reset"
			buttonText="Play again"
		/>
	</div>
)