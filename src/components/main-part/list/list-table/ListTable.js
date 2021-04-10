import React, { Component, useEffect } from 'react';
import ListItem from './list-item/ListItem';
import {store} from "../../../../index";
import {actions} from "../../../../store/actions/actions";
import { useParams } from 'react-router-dom';
import {LISTS} from '../../../../mocks/lists';

const ListTable = () => {
    const {category} = useParams();
    let listData =store.getState().list;
    let listId = LISTS.filter(i => i.title === category )[0].id;   

    useEffect(() => {
        store.dispatch({type: actions.FETCH_LIST, payload: {listId: listId, pageNumber: 1}});
    }, [category]);

    let listItems = listData.data.map((item) =>
        <ListItem item={item} key={item.id}></ListItem>
    );

    return (
        <table className="table table-light table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </table>      
    )
}

export default ListTable;

