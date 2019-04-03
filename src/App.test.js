import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { dateFinder } from '../src/utils/utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Utility functions tests', () => {
  it('Function converting TimeStamps to dates works correctly', () => {
    expect(dateFinder('2017-04-20T19:55:25.295Z')).toBe('20 / 04 / 2017');
  });

});
