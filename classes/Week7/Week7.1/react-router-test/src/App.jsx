import React, { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));
import { Header } from "./components/Header";
import PropDrilling from "./components/PropDrilling";
import ContextApi from "./components/ContextApiMethod";
import ContextApiMethod from "./components/ContextApiMethod";

function App() {
    /*This Header Comp is rendered on top of every route */
    return (
        <>
            {/* <BrowserRouter>
                <Header />
                <Routes>
                    <Route
                        path="/dashboard"
                        element={
                            <Suspense fallback={"loading"}>
                                {" "}
                                <Dashboard />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={"loading"}>
                                {" "}
                                <Landing />
                            </Suspense>
                        }
                    />
                </Routes>
            </BrowserRouter> */}
            {/* <PropDrilling /> */}
            <ContextApiMethod />
        </>
    );
}

export default App;
