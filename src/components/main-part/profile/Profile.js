import React, { Component } from 'react'
import nobody from '../../../images/films/nobody.jpg'

export default class Profile extends Component {
    render() {
        return (
            <div className="profile" id="profile">
                <h2>Mr. Nobody</h2>
                <img className="profile__img" src={nobody}/>
                <div className="profile__info row justify-content-between align-items-center">
                    <h5 className="col">Drama, Fantasy, Romance</h5>
                    <div className="profile__rate col-3">
                        <i class="fas fa-star"></i>
                        7.8
                        <span>/10</span>
                    </div>
                </div>
            </div>
        )
    }
}
