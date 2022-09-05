 /**
 * @jest-environment jsdom
 */

 import { screen, render } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import React from 'react';
 import userEvent from '@testing-library/user-event';
 import { BrowserRouter } from 'react-router-dom';
 import HomePage from '.';

 describe("Home page", () => {

    beforeEach(() => {
        render(<BrowserRouter><HomePage /></BrowserRouter>)
    })

    it("Displays a navbar with appropriate text", () => {

        const navbar = screen.queryByRole("navbar");

        expect(navbar).toBeInTheDocument();

    })

    it("Displays an H1 with appropriate text", () => {

        const heading = screen.queryByRole("heading");

        expect(heading).toBeInTheDocument();

    })

    it("Displays an image on the homepage.", () => {

        const image = screen.queryByRole("img");

        expect(image).toBeTruthy();

    })

    it("Displays a footer with appropriate text", () => {

        const footer = screen.queryByRole("footer");

        expect(footer).toBeInTheDocument();

    })

    it("Displays a button to join the game", () => {

        const button = screen.queryByRole("button");

        expect(button).toBeInTheDocument();
        expect(button.getAttribute("class")).toBe("");
    })

    it("Displays a button to a new game", () => {

        const button = screen.queryByRole("button");

        expect(button).toBeInTheDocument();
        expect(button.getAttribute("class")).toBe("");
    })

})