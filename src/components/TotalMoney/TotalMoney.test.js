 /**
 * @jest-environment jsdom
 */

  import { screen, render } from '@testing-library/react';
  import '@testing-library/jest-dom';
  import React from 'react';
  import userEvent from '@testing-library/user-event';
  import { BrowserRouter } from 'react-router-dom';
  import TotalMoney from '.';
 
  describe("TotalMoney", () => {

    beforeEach(() => {
        render(<BrowserRouter><TotalMoney /></BrowserRouter>)
    })
 
     it("Renders the total money for player", () => {
 
         const div = screen.getByRole("score");
 
         expect(div).toBeInTheDocument();
     })
 
 })