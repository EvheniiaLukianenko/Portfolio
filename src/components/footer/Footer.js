import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <p>© 2021 Yevheniia Lukianenko. All rights reserved.</p>
                        </div>
                        <div className="contact col-3">
                            <a href="https://www.linkedin.com/in/yevheniia-lukianenko/" target="_blank">
                                <i class="fab fa-linkedin"></i>
                                LinkedIn
                            </a>
                            <a href="mailto:zeffir54@gmail.com">
                                <i class="far fa-envelope"></i>
                                Email
                            </a>
                            <a href="https://github.com/EvheniiaLukianenko" target="_blank">
                                <i class="fab fa-github"></i>
                                GitHub
                            </a>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}
