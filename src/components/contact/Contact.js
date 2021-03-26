import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <a href="https://www.linkedin.com/in/yevheniia-lukianenko/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                    LinkedIn
                </a>
                <a href="mailto:zeffir54@gmail.com">
                    <i className="far fa-envelope"></i>
                    Email
                </a>
                <a href="https://github.com/EvheniiaLukianenko" target="_blank">
                    <i className="fab fa-github"></i>
                    GitHub
                </a>
            </div>
        )
    }
}
