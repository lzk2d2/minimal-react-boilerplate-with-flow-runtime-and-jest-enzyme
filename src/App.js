import React, {Component} from 'react';

import MyComponent from './MyComponent';

type MyComponentProps = {
	labelText: number
};

class App extends Component {	
	render() {
		MyComponentProps.labelText = 111 + ""; // flow-runtime, if without + "", then it produces an error, check developer console!!!
		console.log(typeof MyComponentProps.labelText === 'number');

		return (
			<div>
				<MyComponent
					buttonLabel={ MyComponentProps.labelText }
				/>
			</div>
		);
	}
}

export default App;
