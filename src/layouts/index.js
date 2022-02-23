import React from "react";
import {
    BrowserRouter as Router
} from "react-router-dom";
import PrimarySearchAppBar from "../components/appbar";
import routes from "../routes/routes";


export default function Layout() {
    return (
        <Router>
            <div>
                <PrimarySearchAppBar />

                {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
                {routes}
            </div>
        </Router>
    );
}