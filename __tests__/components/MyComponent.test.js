// @flow

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MyComponent from '../../src/MyComponent';

function onClick(event: SyntheticEvent<HTMLButtonElement>) {};

describe('<Button />', () => {
	describe('render()', () => {
		test('renders the component', () => {
			const wrapper = shallow(
				<MyComponent>
				Click Me
				</MyComponent>);
			console.log(wrapper.debug())
			expect(wrapper.find('button').props()["children"]).toEqual("Increment")

			//const component = wrapper.dive();
			//expect(toJson(component)).toMatchSnapshot();
		});
	});
});
