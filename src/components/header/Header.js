import React, { Component } from 'react'

export default class Header extends Component {
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
                            <a className="button" href="#">Contact Me</a>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}
