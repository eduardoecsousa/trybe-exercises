// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const nweJoke = {
    id: '7h3oGtrOfxc',
    joke: 'How do the trees get on the internet? They log on.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  console.log(renderedJoke);
  const btn = screen.getByRole('button')
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );

  jest.clearAllMocks()

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(nweJoke),
  });

  userEvent.click(btn);
  const renderedNewJoke = await screen.findByText('How do the trees get on the internet? They log on.');
  expect(renderedNewJoke).toBeInTheDocument();
  expect(renderedJoke).not.toEqual();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  console.log(renderedNewJoke)
});