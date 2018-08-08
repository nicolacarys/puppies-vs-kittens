import React from "react";
import styled from 'styled-components';
import Contender from './Contender';
import Button from './Button';

const HeadingSection = styled.div `
	margin: 30px 0;
	text-align: center;
`;

const ContenderSection = styled.div `
	display: flex;
`;

const ButtonSection = styled.div `
	text-align: center;
`;

export default ({ kittens, puppies, kitten, puppy, getContender, runBattle }) => (

	<div className="wrapper">

		<HeadingSection className="headings">
			<h1 className="main-heading"> KITTENS vs PUPPIES </h1>
			<p className="instruction"> 
				Click 'Get my contenders' below!
			</p>
		</HeadingSection>

		<ContenderSection className="images">
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
		</ContenderSection>

		<ButtonSection className="button-section">
			<Button 
				clickEvent={ getContender }
				classes="button button-random"
				buttonText="Get my contenders!"
			/>

			<Button 
				clickEvent={ runBattle }
				classes="button button-battle"
				buttonText="Battle!"
			/>
		</ButtonSection>
	</div>
)