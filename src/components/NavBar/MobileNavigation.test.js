/**
 * @jest-environment jsdom
 */

 import { screen, render } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import React from 'react';
 import userEvent from '@testing-library/user-event';
 import { BrowserRouter } from 'react-router-dom';
 import MobileNavigation from '.';

 describe("MobileNavigation", () => {

    beforeEach(() => {
        render(<BrowserRouter><MobileNavigation /></BrowserRouter>)
    })

    it("Displays a navbar with appropriate text", () => {

        const navbar = screen.queryByRole("nav");

        expect(navbar).toBeInTheDocument();

    })
})