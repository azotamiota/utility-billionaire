 /**
 * @jest-environment jsdom
 */

  import { screen, render } from '@testing-library/react';
  import '@testing-library/jest-dom';
  import React from 'react';
  import userEvent from '@testing-library/user-event';
  import { BrowserRouter } from 'react-router-dom';
  import Timer from '.';
 
  describe("Timer", () => {

    beforeEach(() => {
        
        const timeOut = jest.fn()
        render(<BrowserRouter><Timer timeOut={timeOut} questionNumber={1} /></BrowserRouter>)
    })
 
     it("Renders a message", () => {
 
         const message = screen.getByRole("timer");
 
         expect(message).toBeInTheDocument();
     })
 
 })