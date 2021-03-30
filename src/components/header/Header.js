import React, { Component } from 'react'
import {store} from "../../index";
import {actions} from "../../store/actions/actions";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        
        store.dispatch({type: actions.OPEN_MODAL});
        // console.log(store.getState().modal.showModal);
    }

    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="header__logo col-9">
                            <span>Hello,</span>
                            <h2>I'm Jane!</h2>
                        </div>
                        <div className="col-3">
                            <a onClick={this.handleClick} className="button" href="#">Contact Me</a>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}
