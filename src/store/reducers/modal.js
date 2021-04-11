import {actions} from '../actions/actions';

const initialState = {showModal: false};

function modalReducer(state = initialState, action) {
    switch(action.type) {

        case actions.OPEN_MODAL:
            return {
                ...initialState, showModal: true
            };

        case actions.CLOSE_MODAL:
            return {
                initialState,
            };

        default:
            return state;
    }
}

export default modalReducer;