 /**
 * @jest-environment jsdom
 */

  import { screen, render } from '@testing-library/react';
  import '@testing-library/jest-dom';
  import React from 'react';
  import userEvent from '@testing-library/user-event';
  import { BrowserRouter } from 'react-router-dom';
  import Header from '.';
 
  describe("Header", () => {

    beforeEach(() => {
        render(<BrowserRouter><Header /></BrowserRouter>)
    })
 
     it("Renders a header", () => {
 
         const header = screen.getByRole("header");
 
         expect(header).toBeInTheDocument();
     })
 
 })