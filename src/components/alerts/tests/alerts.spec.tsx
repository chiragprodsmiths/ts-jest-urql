import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { Alerts } from '../index';
import alerts from '../alerts.json';

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Alerts />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const { getByTestId } = render(<Alerts />);
  alerts.data.map((alert) => {
    return expect(getByTestId(String(alert.id))).toHaveAttribute('data-testid', String(alert.id));
  });
});
