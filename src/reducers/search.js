
let initializeState = {
    searchResult : [],
    searchText: "nothing",
    searchPage: 0,

}


export default (state=initializeState,action) => {
    if (action.type === "APPLY_SEARCH"){
        let newState = {...state};
        newState.searchResult = action.payload.searchResult;
        newState.searchPage++;
        newState.searchText = action.payload.searchText;
        console.log("new State here: ",action.payload.searchText)
        return newState;
    }
    return state;
}