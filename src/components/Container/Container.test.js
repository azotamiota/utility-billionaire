 /**
 * @jest-environment jsdom
 */

  import { screen, render } from '@testing-library/react';
  import '@testing-library/jest-dom';
  import React from 'react';
  import userEvent from '@testing-library/user-event';
  import { BrowserRouter } from 'react-router-dom';
  import Container from '.';
 
  describe("Container", () => {

    beforeEach(() => {
        render(<BrowserRouter><Container /></BrowserRouter>)
    })
 
     it("Renders a container", () => {
 
         const container = screen.getByRole("div");
 
         expect(container).toBeInTheDocument();
     })
 
 })