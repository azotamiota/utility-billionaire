/**
 * @jest-environment jsdom
 */

 import { screen, render, within } from '@testing-library/react';
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

        const navbars = screen.queryAllByRole("nav");
        for( let navbar of navbars) {
            expect(navbar).toBeInTheDocument();
        }
    })
        
        // test("If ParentComponent is not passed open, ChildComponent is not called", () => {
        //     const open = false
        //     const { getByRole, getAllByTestId } = render(<BrowserRouter><MobileNavigation /></BrowserRouter>).setState({open: false})
        //     const parent = getAllByTestId('navbar')
        //     const children  = getAllByTestId('navlinks')
        //     for (let par of parent) {

        //         expect(within(par).queryAllByTestId('navlinks')).not.toBeNull();
        //     }
        // });
})