import React from "react";

export default ({ containerClass, imgSrc, imgAlt, name, likes, ferocity }) => (
	<div className={ containerClass }>
		<img 
			src={ imgSrc } 
			alt={ imgAlt }
			className="image"
		/>
		<ul className="animal-stats">
			<li><b>Name: </b>{ name }</li>
			<li><b>Likes: </b>{ likes }</li>
			<li><b>Ferocity rating: </b>{ ferocity }</li>
		</ul>
	</div>
)