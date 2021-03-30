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
        // console.log('this.listData', this.listData);
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
        // console.log('arrWithPages', arrWithPages);

        let currPage = this.listData.page;
        let lastPage = this.listData.pagesTotal;

        console.log(lastPage);
        console.log(this.listData.data);
        if(currPage === 1){
            return (
                <div>
                    {buttons[currPage]}
                    {buttons[currPage + 1]}
                    <button onClick={() => this.handleClick(lastPage)}>Last</button>
                </div>
            )
        } else if(currPage === lastPage) {
            return (
                <div>               
                    <button onClick={() => this.handleClick(1)}>First</button>
                    {buttons[currPage - 1]}
                    {buttons[currPage]}
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={() => this.handleClick(1)}>First</button>               
                    {buttons[currPage - 1]}
                    {buttons[currPage]}
                    {buttons[currPage + 1]}
                    <button onClick={() => this.handleClick(lastPage)}>Last</button>
                </div>
            )
        }
                
    }
}
