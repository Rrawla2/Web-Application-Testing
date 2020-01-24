import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('runs sum function', () => {
// const { sum } = require("./components/Dashboard");

// describe('sum function', () => {
//     it("adds two numbers", () => {
//         const expected = 3;
//         const actual = sum.sum(1, 2);
//         expected(actual).toBe(expected);
        
//     })
// })
// })
const sum = (num1, num2) => {
  return num1 + num2
}

describe('runs sum function', () => {
  it('adds two numbers', () => {
    const expected = 3;
    const actual = sum(1, 2);
    expect(actual).toBe(expected);

  })
  
})