import React, { Component } from 'react'
import { Route, Switch } from 'react-router';
import List from '../main-part/list/List';
import Profile from '../main-part/profile/Profile';

export default class MainPart extends Component {
    render() {
        return (
            <div className="main-part container">
                <div className="row align-items-center">
                    <div className="col-6"><List/></div>
                    <div className="col-6">
                        {/* <Switch>
                        <Route path='/profile/:id' children={<Profile/>}/>
                        </Switch> */}
                        <Profile/>
                    </div>
                </div>
            </div>
        )
    }
}
