/**
 * @jest-environment jsdom
 */

import { screen, render } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import React from 'react';
 import userEvent from '@testing-library/user-event';
 import { BrowserRouter } from 'react-router-dom';
 import { QuestionsProvider, RoomProvider, SocketProvider } from "../../context";
 import Game from '.';

 describe("Game page", () => {

    beforeEach(() => {
        render(
            <QuestionsProvider>
                <SocketProvider>
                    <RoomProvider>
                        <BrowserRouter>
                            <Game />
                        </BrowserRouter>
                    </RoomProvider>
                </SocketProvider>
            </QuestionsProvider>
        )
    })

    it("Displays a navbar with appropriate text", () => {

        const navbar = screen.queryByRole("navbar");

        expect(navbar).toBeInTheDocument();

    })

    it("Displays an H1 with appropriate text", () => {

        const heading = screen.queryByRole("heading");

        expect(heading).toBeInTheDocument();

    })

    it("Displays a timer for the game", () => {

        const button = screen.queryByRole("button");

        expect(button).toBeInTheDocument();
        expect(button.getAttribute("class")).toBe("");
    })

    it("Displays a footer with appropriate text", () => {

        const footer = screen.queryByRole("footer");

        expect(footer).toBeInTheDocument();

    })

})