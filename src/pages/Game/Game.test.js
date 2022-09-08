/**
 * @jest-environment jsdom
 */

import { screen, render } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import React , {createContext, useContext} from 'react';
 import userEvent from '@testing-library/user-event';
 import { BrowserRouter } from 'react-router-dom';
 import { QuestionsProvider, RoomProvider, SocketProvider, useQuestions} from "../../context";
 import Game from '.';

 describe("Game page", () => {

    beforeEach(() => {
        const data = [{question: 1}]
        const setData = () => {}
const QuestionsContext = createContext({data, setData});
        render(
            <QuestionsContext.Provider value={[{question: 'asd'}]}>
            <SocketProvider>
                    <RoomProvider>
                        <BrowserRouter>
                            <Game />
                        </BrowserRouter>
                    </RoomProvider>
                </SocketProvider>
            </QuestionsContext.Provider>
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