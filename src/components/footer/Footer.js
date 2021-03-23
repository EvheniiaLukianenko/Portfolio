import React, { Component } from 'react'
import Contact from '../contact/Contact'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <p>© 2021 Yevheniia Lukianenko. All rights reserved.</p>
                        </div>
                        <div className="col-3">
                            <Contact/>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}
