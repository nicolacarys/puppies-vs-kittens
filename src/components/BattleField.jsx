import React, { Component } from 'react';
import styled from 'styled-components';
import BattleCounter from './BattleCounter';
import BattleCard from './BattleCard';
import Result from './Result';

const Wrapper = styled.div `
	font-family: 'Arial', sans-serif;
`;

class BattleField extends Component {
	constructor(props) {
		super(props);

		this.battle = this.battle.bind(this);
	}

	battle () {
		this.props.updateBattle();
		this.props.updateWinner();
	};
	renderResult(winner) {
		if (winner === "kitten") {
			return <Result 
								victoryText="Kitten wins!"
								imgSrc="https://s-media-cache-ak0.pinimg.com/originals/9d/dd/65/9ddd65aaa45ff96351244781d84088f5.jpg" 
								imgAlt="Kitten victory"
								reset={ this.props.resetBattle }
								battled={ this.props.battled }
							/>

		} else if (winner === "puppy") {
			return <Result 
								victoryText="Puppy wins!"
								imgSrc="https://s-media-cache-ak0.pinimg.com/736x/b9/1d/7c/b91d7cf82007f922bb1c9d02ba2c6fc8--yellow-labrador-retrievers-golden-retriever.jpg"
								imgAlt="Puppy victory"
								reset={ this.props.resetBattle }
								battled={ this.props.battled }
							/>

		} else if (winner === "friendship") {
			return <Result 
								victoryText="Friendship wins!"
								imgSrc="http://www.petsworld.in/blog/wp-content/uploads/2014/07/dog-sleeping-with-kitten.jpg" 
								imgAlt="Friendship victory"
								reset={ this.props.resetBattle }
								battled={ this.props.battled }
							/>

		} else if (winner === "death") {
			return <Result 
								victoryText="Death wins :("
								imgSrc="https://i.pinimg.com/736x/56/97/fb/5697fb2f5d6724e676361efb4ecfd42a--diy-halloween-costumes-costume-ideas.jpg" 
								imgAlt="Death victory"
								reset={ this.props.resetBattle }
								battled={ this.props.battled }
							/>

		}
	};

	render() {
		return (
			<Wrapper>
				<BattleCounter 
					kittenVic={ this.props.kittenVic }
					puppyVic={ this.props.puppyVic }
				/>
				{ !this.props.battled
					?	<BattleCard 
							kittens={ this.props.kittens }
							puppies={ this.props.puppies }
							kitten={ this.props.kitten }
							puppy={ this.props.puppy }
							getContender={ this.props.getContender }
							runBattle={ this.battle }
							resetCounter={ this.props.resetCounter }
						/>
					: this.renderResult(this.props.winner)
				}
			</Wrapper>
		)
	}
};

export default BattleField;