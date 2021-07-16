import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { InternationalNews } from './International';
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

                <Route path="/international" exact>
                    <InternationalNews />
                </Route>


                <Route>
                    <h3>Error 404 | Page Not Found</h3>

                </Route>

            </Switch>

        </>
    )


}


export { Routes }