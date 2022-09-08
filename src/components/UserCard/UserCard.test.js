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
        const mockData = [{username: 'aga', room: 12}]
        render(<BrowserRouter><UserCard currentPlayers={mockData} /></BrowserRouter>)
    })
 
     it("Renders the username for a player", () => {
 
         const username = screen.getByRole("username");
 
         expect(username).toBeInTheDocument();
     })
 
 })