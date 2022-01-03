import { FETCH_ADDRESS } from '../action/user';

const initialState = {
    firstName: '',
    lastName: '',
    phoneNum: '',
    dateOfBirth: '',
    address: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ADDRESS:
            const updateState = {...state, address: address.concat(action.value)};
            return updateState;
        default:
            return state;
    }
}