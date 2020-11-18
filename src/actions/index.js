import axios from "axios";

export const addComment = (text) => {
    return {
        type : "SEND_COMMENT",
        payload:{
            text:text,
        }
    }
}

export const setSearchText = (text) => {
    console.log("SetSearchText in index.js")
    return {
        type: "SET_SEARCH_TEXT",
        payload: {
            text
        }
    }
}

