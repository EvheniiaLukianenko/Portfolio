import {actions} from '../actions/actions';

const initialState = {
    id: 0,
    title: '',
    description: "",
    image: '',
    genre: '',
    status: 0,
    imdb: 0,
};

function itemReducer(state = initialState, action) {
    switch(action.type) {

        case actions.FETCH_ITEM: {
            return initialState;
        }

        case actions.FETCH_ITEM_SUCCESS: {
            return {
                ...initialState,
                ...action.payload,
                errorText: ''
            };
        }

        case actions.CLOSE_ITEM: {
            return {
                ...initialState,
                errorText: ''
            };
        }

        case actions.FETCH_ITEM_ERROR: {
            return {
                ...initialState,
                errorText: 'not found'
            };
        }

        default:
            return state;
    }
}

export default itemReducer;
