import React, { Component } from 'react';
import ListItem from './list-item/ListItem';
import getList from '../../../../services/fetch-data';

export default class ListTable extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     data: [{
        //         title: "Bla"
        //     }]
        // };

        // this.getListData = this.getListData.bind(this);
    }

    // getListData() {
    //     return getList(1);
    // }

    listItems = getList(1).map((item, index) =>
        <ListItem item={item} index={index}></ListItem>
    );

    render() {
        
        return (
            <table class="table table-light table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.listItems}
                </tbody>
            </table>       
        )
    }
}
