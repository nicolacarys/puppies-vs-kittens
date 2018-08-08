import React from "react";
import Contender from './Contender';
import Button from './Button';

export default ({ kittens, puppies, kitten, puppy, getContender, runBattle }) => (

	<div className="wrapper">

		<div className="headings">
			<h1 className="main-heading"> KITTENS vs PUPPIES </h1>
			<p className="instruction"> 
				Click the 'random selector' button below!
			</p>
		</div>

		<div className="images">
			<Contender 
				containerClass="left-block"
				imgSrc={ kittens._tail.array[kitten].src }
				imgAlt="kitten"
				name={ kittens._tail.array[kitten].name }
				likes={ kittens._tail.array[kitten].likes }
				ferocity={ kittens._tail.array[kitten].ferocityRating }
			/>

			<Contender 
				containerClass="right-block"
				imgSrc={ puppies._tail.array[puppy].src }
				imgAlt="puppy"
				name={ puppies._tail.array[puppy].name }
				likes={ puppies._tail.array[puppy].likes }
				ferocity={ puppies._tail.array[puppy].ferocityRating }
			/>
		</div>

		<div className="button-section">
			<Button 
				clickEvent={ getContender }
				classes="button button-random"
				buttonText="Give me a random kitten and puppy!"
			/>

			<Button 
				clickEvent={ runBattle }
				classes="button button-battle"
				buttonText="Battle!"
			/>
		</div>
	</div>
)