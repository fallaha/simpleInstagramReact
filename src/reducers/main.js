let user = {
    username : "username",
    avatar : "https://instagram.fmct5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/123586899_700153297562853_1360514444961611858_n.jpg?_nc_ht=instagram.fmct5-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=iggKlqXPYuEAX_nRXkb&_nc_tp=24&oh=b3b5cf6cbd6b3d8b58d1595ca4b6456c&oe=5FCE9B4B",
    isFollowing: false,

}
let initializeState = {
    currentUser : user,
}


export default (state=initializeState, action) => {
    if (action.type === "SET_SEARCH_PAGE"){
        let newState = {...state};
        return newState;    
    }

    return state;
} 