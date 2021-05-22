import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
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

    if(action.type === actionTypes.STORE_RESULT){
        return{
            ...state,
            results: state.results.concat(
                {id: new Date(), value: state.counter})  //Immuatibily updating an array
        }
    }

    if(action.type === actionTypes.DELETE_RESULT){

        // const index = 2;
        // const newArray = [...state.results];
        // newArray.splice(index, 1);

        const updatedArray = state.results.filter(result => result.id !== action.resultElId);

        return{
            ...state,
            results: updatedArray
        }
    }

    return state;
}

export default reducer;