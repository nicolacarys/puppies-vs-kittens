import React from "react";

export default ({ clickEvent, classes, buttonText }) => (
	<button onClick={ () => clickEvent() } className={ classes }>
		{ buttonText }
	</button>
)