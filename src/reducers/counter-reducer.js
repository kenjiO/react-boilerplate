import {
    INCREMENT,
    ADD
} from '../actions/counter-actions'

const counterReducer = (state = {counter: 1}, action) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {counter: state.counter + 1})
        case ADD:
            return Object.assign({}, state, {counter: state.counter + action.value})
        default:
            return state
    } 
}

export default counterReducer