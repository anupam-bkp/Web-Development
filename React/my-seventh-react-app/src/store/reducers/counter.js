import * as actionTypes from '../actions';

const initialState = {
    counter: 0
};

//state should be updated immutabily

const reducer = (state = initialState, action) => {

    if(action.type === actionTypes.INCREMENT){
        const newState = Object.assign({}, state);
        newState.counter = state.counter + 1;
        return newState;
    }

    if(action.type === actionTypes.DECREMENT){
        return{
            ...state,
            counter: state.counter - 1
        }
    }

    if(action.type === actionTypes.ADD){
        return{
            ...state,
            counter: state.counter + action.val
        }
    }

    if(action.type === actionTypes.SUBTRACT){
        return{
            ...state,
            counter: state.counter - action.val
        }
    }

    return state;
}

export default reducer;