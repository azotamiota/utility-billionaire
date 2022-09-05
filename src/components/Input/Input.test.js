 /**
 * @jest-environment jsdom
 */

  import { screen, render } from '@testing-library/react';
  import '@testing-library/jest-dom';
  import React from 'react';
  import userEvent from '@testing-library/user-event';
  import { BrowserRouter } from 'react-router-dom';
  import Input from '.';
 
  describe("Input", () => {

    beforeEach(() => {
        render(<BrowserRouter><Input /></BrowserRouter>)
    })
 
     it("Renders an input", () => {
 
         const input = screen.getByRole("input");
 
         expect(input).toBeInTheDocument();
     })
 
 })