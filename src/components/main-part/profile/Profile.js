import React, { Component } from 'react'
import {store} from "../../../index";

export default class Profile extends Component {
    item;
    getItem() {
        this.item = store.getState().item;
    }
    // imagePath = '../../../assets/images/' + this.item?.image;
    imagePath = '../../../assets/images/';

    render() {
        this.getItem();
        return (
            this.item.image ?
                (<div className="profile" id="profile">
                    <h2>{this.item.title}</h2>
                    <img className="profile__img" alt={this.item.image} src={require('../../../assets/images/' + this.item.image).default}/>
                    <div className="profile__info row justify-content-between align-items-center">
                        <h5 className="col">{this.item.genre}</h5>
                        <div className="profile__rate col-3">
                            <i className="fas fa-star"></i>
                            {this.item.imdb}
                            <span>/10</span>
                        </div>
                    </div>
                </div>)
                :
                (null)
        )
    }
}
