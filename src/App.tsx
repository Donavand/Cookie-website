import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./common";
import { About, Contact, Home } from "./Pages";

/**
 * Returns the main app component
 *
 * @returns The main app component
 */
export const App = (): JSX.Element => (
    <>
        <Navbar />

        <Routes>
            <Route element={<Home />} path="/Home" />
            <Route element={<Contact />} path="/Contact" />
            <Route element={<About />} path="/About" />
        </Routes>
    </>
);
