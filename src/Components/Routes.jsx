import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NewsHomePage } from './NewsHomePage';
import { Sidebar } from './Sidebar';


function Routes() {

    return (
        <>
            <Sidebar />

            <Switch>
                <Route path="/" exact>
                    <NewsHomePage />
                </Route>

                <Route>
                    <h3>Error 404 | Page Not Found</h3>

                </Route>

            </Switch>

        </>
    )


}


export { Routes }