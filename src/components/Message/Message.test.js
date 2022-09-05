 /**
 * @jest-environment jsdom
 */

  import { screen, render } from '@testing-library/react';
  import '@testing-library/jest-dom';
  import React from 'react';
  import userEvent from '@testing-library/user-event';
  import { BrowserRouter } from 'react-router-dom';
  import Message from '.';
 
  describe("Message", () => {

    beforeEach(() => {
        render(<BrowserRouter><Message /></BrowserRouter>)
    })
 
     it("Renders a message", () => {
 
         const message = screen.getByRole("message");
 
         expect(message).toBeInTheDocument();
     })
 
 })