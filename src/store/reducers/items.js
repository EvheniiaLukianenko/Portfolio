import {actions} from '../actions/actions';

const initialState = {data: []};

function itemsReducer(state = initialState, action) {
    switch(action.type) {

        case actions.FETCH_LIST:
            return {
                ...initialState,
            };

        case actions.FETCH_LIST_SUCCESS:
            return {
                ...initialState,
                ...action.payload,
            };

        case actions.FETCH_LIST_ERROR:
            return {
                ...initialState,
            };

         case actions.REMOVE_ITEM: {
            return {
                ...state,
                data: state.data.filter(i => i.id !== action.payload),
            };
        }    

        default:
            return state;
    }
}

export default itemsReducer;
