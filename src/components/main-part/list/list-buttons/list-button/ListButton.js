import React, { Component } from 'react'
import {store} from "../../../../../index";
import {actions} from "../../../../../store/actions/actions";
import {Link} from 'react-router-dom';

export default class ListButton extends Component {
    constructor(props) {
        super(props);
    }
    listData;

    getListData() {
        this.listData = store.getState().list;
    }

    render() {
        this.getListData();
        return (
            <div >
                <Link to={`/${this.props.listData.title}`}
                //  className="button button--violet"
                 className={this.listData.id === this.props.listData.id ? "button button--violet active" : "button button--violet"}
                 >{this.props.listData.title}</Link>
                {/* <button className="button button--violet">{this.props.listData.title}</button> */}
            </div>
        )
    }
}


// onClick={this.handleClick}
// className={item?.id === props.item.id ? "button button--violet active" : "button button--violet"}