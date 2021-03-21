import React, { Component } from 'react';
import ListButton from './list-button/ListButton';

export default class ListButtons extends Component {
    render() {
        return (
            <div className="list-buttons row justify-content-center">
                <div className="col-3">
                    <ListButton/>
                </div>
                <div className="col-3">
                    <ListButton/>
                </div>
            </div>
        )
    }
}
