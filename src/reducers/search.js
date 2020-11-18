let initialzeState = {
    searchText : "",
}

export default (state=initialzeState, action) => {
    if (action.type === "SET_SEARCH_TEXT"){
        let newState = {...state}
        newState.searchText = action.payload.text
        return newState
    }
    return state
}