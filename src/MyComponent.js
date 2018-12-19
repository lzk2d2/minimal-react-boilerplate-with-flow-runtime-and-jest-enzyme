// @flow
import React, { Component } from 'react';

interface HasMyEvents {
	handleClick(event: SyntheticEvent<HTMLButtonElement>): void;
}

type MyProps = {
	buttonLabel: string,
}

type MyState = {
	count: number,
};

class MyComponent extends Component<MyProps, MyState> implements HasMyEvents {
	state = {
		count: 0
	};
	
	static defaultProps = {
		buttonLabel: 'Increment'
	};
	
	handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
		(event.currentTarget: HTMLButtonElement);
		
		this.setState(prevState => ({
			count: prevState.count + 1,
		}));
	};
	
	render() {
		const { count } = this.state;
		const { buttonLabel } = this.props;
		return (
			<div>
				<p>Count: {count}</p>
				<button onClick={this.handleClick}>
					{ buttonLabel }
				</button>
			</div>
		);
	}
}

export default MyComponent;
