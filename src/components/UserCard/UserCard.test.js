 /**
 * @jest-environment jsdom
 */

  import { screen, render } from '@testing-library/react';
  import '@testing-library/jest-dom';
  import React from 'react';
  import userEvent from '@testing-library/user-event';
  import { BrowserRouter } from 'react-router-dom';
  import UserCard from '.';
 
  describe("UserCard", () => {

    beforeEach(() => {
        render(<BrowserRouter><UserCard /></BrowserRouter>)
    })
 
     it("Renders the username for a player", () => {
 
         const username = screen.getByRole("username");
 
         expect(username).toBeInTheDocument();
     })
 
 })