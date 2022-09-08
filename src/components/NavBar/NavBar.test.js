/**
 * @jest-environment jsdom
 */

 import { screen, render } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import React from 'react';
 import userEvent from '@testing-library/user-event';
 import { BrowserRouter } from 'react-router-dom';
 import NavBar from '.';

 describe("NavBar", () => {

    beforeEach(() => {
        render(<BrowserRouter><NavBar /></BrowserRouter>)
    })

    it("Displays a navbar with appropriate text", () => {

        const navbars = screen.queryAllByRole("nav");
        for( let navbar of navbars) {
            expect(navbar).toBeInTheDocument();
        }

    })
})