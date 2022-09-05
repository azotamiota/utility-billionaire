 /**
 * @jest-environment jsdom
 */

 import { screen, render } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import React from 'react';
 import userEvent from '@testing-library/user-event';
 import { BrowserRouter } from 'react-router-dom';
 import NotFound from '.';

 describe("JoinGame page", () => {

    beforeEach(() => {
        render(<BrowserRouter><NotFound /></BrowserRouter>)
    })

    it("Displays an H1 with appropriate text", () => {

        const heading = screen.queryByRole("heading");

        expect(heading).toBeInTheDocument();

    })

})