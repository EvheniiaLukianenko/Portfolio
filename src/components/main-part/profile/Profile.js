import React, { Component, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {store} from "../../../index";
import {actions} from "../../../store/actions/actions";

const Profile = () => {
    let item;
    let listData;
    const {id} = useParams();

    const getItem = () => {
        item = store.getState().item;
    }
    
    const getListData = () => {
        listData = store.getState().list;
    }
    // imagePath = '../../../assets/images/' + this.item?.image;
  
    getItem();
    getListData();

    useEffect((params) => {
        console.log("effects", id);
        store.dispatch({type: actions.FETCH_ITEM, payload: {listId: listData.listId, itemId: parseInt(id) }});
    },[id]);

    getItem();
    getListData();
    
    if ( listData.listId === 1 && item.image) {
            return (
                <div className="profile" id="profile">
                    <h2>{item.title}</h2>
                    <img className="profile__img" alt={item.image} src={require('../../../assets/images/' + item.image).default}/>
                    <div className="profile__info row justify-content-between align-items-center">
                        <h5 className="col">{item.genre}</h5>
                        <div className="profile__rate col-3">
                            <i className="fas fa-star"></i>
                            {item.imdb}
                            <span>/10</span>
                        </div>
                    </div>
                </div>
            )
        } else if (listData.listId === 2 && item.image) {
            return (
                <div className="profile" id="profile">
                    <h2>{item.title}</h2>
                    <img className="profile__img" alt={item.image} src={require('../../../assets/images/' + item.image).default}/>
                    <div className="profile__info row justify-content-between align-items-center">
                        <h5 className="col">{item.author}</h5>
                    </div>
                </div>
            )
        } else {
            return null;
        }
};

export default Profile;
