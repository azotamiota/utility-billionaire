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

    // beforeEach(() => {

        
    // })
 
     it("Renders an input", () => {
        const levels = [
            {id: 1, name: 'easy', value: 'easy'},
            {id: 2, name: 'medium', value: 'medium'},
            {id: 3, name: 'hard', value: 'hard'},
          ]
        render(<BrowserRouter><Input defaultValue={levels}/></BrowserRouter>)
         const input = screen.getByRole("input");
 
         expect(input).toBeInTheDocument();
     })

     it("Renders an option", () => {
        const levels = [
            {id: 1, name: 'easy', value: 'easy'}
          ]
        render(<BrowserRouter><Input type='select' defaultValue={levels}/></BrowserRouter>)
        const input = screen.getByRole("option");
 
        expect(input).toBeInTheDocument();
    })
 
 })