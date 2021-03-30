import React, { Component } from 'react'
import {actions} from '../../../../store/actions/actions'
import {store} from "../../../../index";

export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currPage : 1,
            buttons: [1, 2, 3]
        }
        this.handleClick = this.handleClick.bind(this);
    }
    listData;

    getListData() {
        this.listData = store.getState().list;
    }

    handleClick(number) {
        console.log('this.listData', this.listData);
        store.dispatch({type: actions.FETCH_LIST, payload: {listId: this.listData.listId || 1, pageNumber: number}});
    }

    
    render() {
        this.getListData();
        let arrWithPages = [];
        // this.listData
        for(let i=1; i <= this.listData.pagesTotal; i++){
            arrWithPages[i] = i;
        }
        let buttons = arrWithPages.map((number) =>
            <button onClick={() => this.handleClick(number)} key={number}>{number}</button>
        );
        console.log('arrWithPages', arrWithPages);
        return (
            <div>{buttons}</div>
        )        
    }
}
