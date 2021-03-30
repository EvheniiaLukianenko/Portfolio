import React, { Component } from 'react'
import Contact from '../contact/Contact'
import { store } from '../..';
import { actions } from '../../store/actions/actions'

export default class Modal extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick(e) {
        e.preventDefault();
        store.dispatch({type: actions.CLOSE_MODAL});
    }
        render() {
            let showModal = store.getState().modal.showModal;
            console.log(store.getState().modal);
            if(showModal){
                return (
                    <div className="modal" id="modal">
                        <div className="modal__window">
                        <button onClick={this.handleClick} className="modal__close">Close</button>
                            <h3 className="modal__header">Get in touch</h3>
                            <form method="POST" className="modal__form">
                                <input className="modal__control" name="name" type="text" placeholder="Name"/>
                                <input className="modal__control" name="email" type="email" placeholder="Email"/>
                                <textarea className="modal__control" name="message" placeholder="Message"/>
                                <div className="modal__contact">
                                    <button className="button button--nobd" type="submit">Send</button>
                                    <Contact/>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            } else {
                console.log('no render');
                return null;
            }
    }
}
