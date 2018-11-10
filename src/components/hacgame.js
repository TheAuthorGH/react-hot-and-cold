import React from 'react';
import {connect} from 'react-redux';

import './hacgame.css';

import * as actions from '../hacactions';

export class HACGame extends React.Component {

	resetGame() {
		this.props.dispatch(actions.resetGame());
	}

	submitNumber(num) {
		this.props.dispatch(actions.submitNumber(num));
	}

	onSubmit(event) {
		event.preventDefault();
		this.submitNumber(Number(this.numberInput.value));
		this.numberInput.value = '';
	}

	getTemp(num) {
		const diff = Math.abs(this.props.answer - num);
		if(diff < 5)
			return 'Hot';
		else if(diff < 15)
			return 'Warm';
		else
			return 'Cold';
	}

	getLast() {
		return this.props.history[this.props.history.length - 1];
	}

	render() {
		let temp;
		if(this.props.history.length < 1)
			temp = '';
		else
			temp = this.getTemp(this.getLast());

		const tempClass = 'hacgame-' + temp.toLowerCase();
		const tempMessage = temp ? <p className="hacgame-tempmsg">You are <span className={tempClass}>{temp}</span>!</p> : <p className="hacgame-tempmsg"></p> ;
		const history = this.props.history
			.sort().map((num, index) => <li key={index} className={'hacgame-' + this.getTemp(num).toLowerCase()}>{num}</li>);
		
		if(this.props.gameover)
			return (
				<div className="hacgame">
					<h3>YOU WON!</h3>
					<form onSubmit={e => e.preventDefault()}>
						<button type="submit" onClick={() => this.resetGame()}>Play Again</button>
					</form>
				</div>
			);

		return (
			<div className="hacgame">
				<form onSubmit={e => this.onSubmit(e)}>
					<input 
						type="number"
						ref={input => this.numberInput = input}
						max="100"
						min="1"
						placeholder="Your guess here."
					/>
					{tempMessage}
					<button type="submit">Guess!</button>
				</form>

				<h3>History ({history.length} guesses)</h3>
				<ul className="hacgame-history">{history}</ul>
			</div>
		);
	}

}

const mapStateToProps = state => ({
	answer: state.answer,
	history: state.history,
	gameover: state.gameover
});

export default connect(mapStateToProps)(HACGame);