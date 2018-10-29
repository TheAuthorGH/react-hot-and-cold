import React from 'react';

import './hacgame.css';

export default class HACGame extends React.Component {

	constructor(props) {
		super(props);
		this.state = this.startState();
	}

	startState() {
		return {
			answer: Math.round(Math.random() * 100),
			history: [],
			last() { 
				return this.history[this.history.length - 1]
			},
			gameover: false
		};
	}

	resetState() {
		this.setState(this.startState());
	}

	guess(number) {
		if(!this.state.history.includes(number))
			this.setState({
				history: [...this.state.history, number]
			});
		if(number === this.state.answer)
			this.setState({gameover: true});
	}

	onSubmit(event) {
		event.preventDefault();
		this.guess(Number(this.numberInput.value));
		this.numberInput.value = '';
	}

	getTemp(num) {
		const diff = Math.abs(this.state.answer - num);
		if(diff < 5)
			return 'Hot';
		else if(diff < 15)
			return 'Warm';
		else
			return 'Cold';
	}

	render() {
		let temp;
		if(this.state.history.length < 1)
			temp = '';
		else
			temp = this.getTemp(this.state.last());

		const tempClass = 'hacgame-' + temp.toLowerCase();
		const tempMessage = temp ? <p className="hacgame-tempmsg">You are <span className={tempClass}>{temp}</span>!</p> : <p className="hacgame-tempmsg"></p> ;
		const history = this.state.history
			.sort().map((num, index) => <li key={index} className={'hacgame-' + this.getTemp(num).toLowerCase()}>{num}</li>);
		
		if(this.state.gameover)
			return (
				<div className="hacgame">
					<h3>YOU WON!</h3>
					<form onSubmit={e => e.preventDefault()}>
						<button type="submit" onClick={() => this.resetState()}>Play Again</button>
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