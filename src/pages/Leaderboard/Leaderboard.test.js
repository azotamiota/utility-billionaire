 /**
 * @jest-environment jsdom
 */

 import { screen, render } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import React from 'react';
 import userEvent from '@testing-library/user-event';
 import { BrowserRouter } from 'react-router-dom';
 import Leaderboard from '.';
 import axios from 'axios'

 describe("JoinGame page", () => {

    beforeEach(() => {
        render(<BrowserRouter><Leaderboard /></BrowserRouter>)
    })

    it("Displays a navbar with appropriate text", () => {

        const navbar = screen.queryByRole("navbar");

        expect(navbar).toBeInTheDocument();

    })

    it("Displays an H1 with appropriate text", () => {

        const heading = screen.queryByText("Leaderboard");

        expect(heading).toBeInTheDocument();

    })

    it("Displays a button to start a new game", () => {

        const button = screen.queryByRole("button");

        expect(button).toBeInTheDocument();
        expect(button.getAttribute("class")).toBe("");
    })


    it("Gets the leaderboard", async () => {
        
        const leaderboard = await axios.get('http://ec2-18-130-121-240.eu-west-2.compute.amazonaws.com:5000/leaderboard')
        
        expect(leaderboard).toContain("/leaderboard")
    })

})
