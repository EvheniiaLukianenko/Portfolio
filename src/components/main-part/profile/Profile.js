import React, { Component } from 'react'
import {store} from "../../../index";

export default class Profile extends Component {
    item;
    listData;

    getItem() {
        this.item = store.getState().item;
    }
    
    getListData() {
        this.listData = store.getState().list;
    }
    // imagePath = '../../../assets/images/' + this.item?.image;

    render() {
        this.getItem();
        this.getListData();

        if ( this.listData.listId === 1 && this.item.image) {
            return (
                <div className="profile" id="profile">
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
                </div>
            )
        } else if (this.listData.listId === 2 && this.item.image) {
            return (
                <div className="profile" id="profile">
                    <h2>{this.item.title}</h2>
                    <img className="profile__img" alt={this.item.image} src={require('../../../assets/images/' + this.item.image).default}/>
                    <div className="profile__info row justify-content-between align-items-center">
                        <h5 className="col">{this.item.author}</h5>
                    </div>
                </div>
            )
        } else {
            return null;
        }
            
    }
}
