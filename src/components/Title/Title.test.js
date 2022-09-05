 /**
 * @jest-environment jsdom
 */

  import { screen, render } from '@testing-library/react';
  import '@testing-library/jest-dom';
  import React from 'react';
  import userEvent from '@testing-library/user-event';
  import { BrowserRouter } from 'react-router-dom';
  import Title from '.';
 
  describe("Title", () => {

    beforeEach(() => {
        render(<BrowserRouter><Title /></BrowserRouter>)
    })
 
     it("Renders a title component", () => {
 
         const title = screen.getByRole("title");
 
         expect(title).toBeInTheDocument();
     })
 
 })