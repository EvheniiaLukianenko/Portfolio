import React, { Component, useState } from 'react';
import {actions} from "../../../../../store/actions/actions";
import {store} from "../../../../../index";
import {Link, Redirect, useRouteMatch} from 'react-router-dom';

const ListItem = (props) => {

    let item = store.getState().item;
    let match = useRouteMatch();
    const [toggle, setToggle] = useState(false);

    const handleClick = () =>  {
        setToggle(!toggle);
    };

    const removeItem = (itemId) =>  {
        store.dispatch({type: actions.REMOVE_ITEM, payload: itemId});
    };

    return (
        <tr className={ item.id === props.item.id && toggle ? "list__item active" : "list__item"}>
            <th scope="row">{props.item.id}</th>
            <td>
                <Link to={
                    toggle ? `${match.url}` : `${match.url}/${props.item.id}`} 
                    onClick={handleClick}>{props.item.title}
                    </Link>
            </td>
            <td>
                <Link to={
                    toggle ? `${match.url}` : `${match.url}/${props.item.id}`} 
                    onClick={handleClick}>{props.item.description}
                    </Link>
            </td>
            <td>
                <Link to={`${match.url}`} onClick={() => removeItem(props.item.id)} className='button button--small button--nobd'>
                    Remove
                </Link>          
            </td>
        </tr>       
    )
};

export default ListItem;
