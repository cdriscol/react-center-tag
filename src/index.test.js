import React from 'react';
import ReactDOM from 'react-dom';
import Center from 'index';

describe('<Center />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
      ReactDOM.render(<Center>test</Center>, div);
    });
});
