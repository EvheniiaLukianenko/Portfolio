import React, { Component } from 'react'
import List from '../main-part/list/List';
import Profile from '../main-part/profile/Profile';

export default class MainPart extends Component {
    render() {
        return (
            <div className="main-part container">
                <div className="row align-items-center">
                    <div className="col-6"><List/></div>
                    <div className="col-6"><Profile/></div>
                </div>
            </div>
        )
    }
}
