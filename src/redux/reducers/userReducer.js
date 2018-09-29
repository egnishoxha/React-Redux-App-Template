import { LOAD_USERS } from '../constants/actionTypes';
import { UNLOAD_USERS } from '../constants/actionTypes';
import { LOAD_USER_DETAIL } from '../constants/actionTypes';

const initialState = {
    users: [],
    user: {
        name: {
            first: "",
            last: ""
        },
        email: "",
        phone: "",
        picture: {
            large: "",
            medium: "",
            thumbnail: ""
        }
    }
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_USERS:
            state = {
                ...state,
                users: action.payload
            }
            break;
        case UNLOAD_USERS:
            state = {
                ...state,
                users: action.payload
            }
            break;
        case LOAD_USER_DETAIL:
            state = {
                ...state,
                user: state.users.find(user => user.email === action.payload)
            }
            break;
        default:
            break;
    }
    return state;
}

export default userReducer;