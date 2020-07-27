import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';
import TestProvider from '../config/TestProvider';

afterEach(cleanup);

describe('<App />', () => {
  let app;
  beforeAll(() => {
    app = render(
      <TestProvider>
        <App />
      </TestProvider>
    );
  });

  it('Renders successfully without error', () => {
    expect(app.container).toBeInTheDocument();
  });
});