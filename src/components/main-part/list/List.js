import React, { Component } from 'react'
import ListButtons from './list-buttons/ListButtons';
import ListTable from './list-table/ListTable';
import Pagination from './pagination/Pagination';

export default class List extends Component {
    render() {
        return (
            <div>
                <ListButtons/>
                <ListTable/>
                <Pagination/>
            </div>
        )
    }
}
