 /**
 * @jest-environment jsdom
 */

 import { screen, render } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import React from 'react';
 import userEvent from '@testing-library/user-event';
 import { BrowserRouter } from 'react-router-dom';
 import HomePage from '.';

 const testFunc = jest.fn()

 describe("Home page", () => {

    beforeEach(() => {
        render(<BrowserRouter><HomePage /></BrowserRouter>)
    })


    it("Displays a button to join the game", async () => {

        const button = screen.queryByText("Join Game");

        await userEvent.click(button);
        expect(testFunc).toHaveBeenCalled()
        expect(testFunc).toHaveBeenCalledTimes(1)

        expect(button).toBeInTheDocument();
    
    })

    it("Displays a button to a new game", async () => {

        const button = screen.queryByText("Create Game");
        await userEvent.click(button);
        expect(testFunc).toHaveBeenCalled()
        expect(testFunc).toHaveBeenCalledTimes(1)

        expect(button).toBeInTheDocument();
       
    })

})