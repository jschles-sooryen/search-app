import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';
import TestProvider from '../config/TestProvider';

afterEach(cleanup);

describe('<App />', () => {
  it('Renders successfully without error', () => {
    const app = render(
      <TestProvider>
        <App />
      </TestProvider>
    );
    expect(app.container).toBeInTheDocument();
  });
});