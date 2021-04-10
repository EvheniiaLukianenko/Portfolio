import React, { Component } from 'react'
import { Route, Switch, useRouteMatch } from "react-router-dom";
import List from '../main-part/list/List';
import Profile from '../main-part/profile/Profile';

const MainPart = () => {
    let match = useRouteMatch();

    return (
        <div className="main-part container">
            <div className="row">
                <div className="col-6"><List/></div>
                <div className="col-6">
                    <Route path={`${match.path}/:id`} children={<Profile/>}/>
                </div>
            </div>
        </div>
    )
};

export default MainPart;
