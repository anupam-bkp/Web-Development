import * as actionTypes from '../actions';

const initialState = {
    results: []
};

//state should be updated immutabily

const reducer = (state = initialState, action) => {
    
    if(action.type === actionTypes.STORE_RESULT){
        return{
            ...state,
            results: state.results.concat(
                {id: new Date(), value: action.result})  //Immuatibily updating an array
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