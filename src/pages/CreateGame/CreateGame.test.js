/**
 * @jest-environment jsdom
 */

 import { screen, render } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import React from 'react';
 import userEvent from '@testing-library/user-event';
 import { BrowserRouter } from 'react-router-dom';
 import { QuestionContext, RoomProvider, SocketProvider, useQuestions } from "../../context";
 import CurrentGame from '.';

 describe("CurrentGame page", () => {

    beforeEach(() => {
        const [data, setData] = useQuestions()
        setData = [{question: 1}]
        render(
            <QuestionsProvider>
                <SocketProvider>
                    <RoomProvider>
                        <BrowserRouter>
                            <CurrentGame />
                        </BrowserRouter>
                    </RoomProvider>
                </SocketProvider>
            </QuestionsProvider>
        )
    })

    it("Displays a navbar with appropriate text", () => {

        const navbars = screen.queryAllByRole("nav");
        for( let navbar of navbars) {
            expect(navbar).toBeInTheDocument();
        }

    })

    it("Displays an H1 with appropriate text", () => {
        const navbars = screen.queryAllByRole("heading");
        for( let navbar of navbars) {
            expect(navbar).toBeInTheDocument();
        }

    })

    it("Displays a footer with appropriate text", () => {
        const navbars = screen.queryAllByRole("footer");
        for( let navbar of navbars) {
            expect(navbar).toBeInTheDocument();
        }

    })

})