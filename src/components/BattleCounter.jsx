import React from "react";
import styled from 'styled-components';

const CounterContainer = styled.div `
	position: absolute;
	top: 6px;
	right: 6px;
	width: 180px;
	background-color: #3e4042;
	text-align: center;
	font-weight: 400;
	letter-spacing: 1px;
	font-size: 13px;
	color: #fff;
	
	h3 {
		margin: 10px 10px 5px;
	}
`;

const Table = styled.table `
	margin-bottom: 5px;
	width: 100%;
`;

export default ({ kittenVic, puppyVic }) => (
	<CounterContainer>
		<h3>Battle Counter</h3>

		<Table>
			<tr>
				<td>Kitten</td>
				<td>Puppy</td>
			</tr>

			<tr>
				<td>{ kittenVic }</td>
				<td>{ puppyVic }</td>
			</tr>
		</Table>

	</CounterContainer>
)