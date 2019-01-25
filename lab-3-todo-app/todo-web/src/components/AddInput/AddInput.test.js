import React from 'react';
import ReactDOM from 'react-dom';
import AddInput from './AddInput';

it('renders without crashing', () => {
  const name = 'input';
  const placeholder = 'placeholder';

  const div = document.createElement('div');
  ReactDOM.render(<AddInput name={name} placeholder={placeholder} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
