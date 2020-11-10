import axios from "axios";

export const addComment = (text) => {
    return {
        type : "SEND_COMMAND",
        payload:{
            text
        }
    }
}


const getFromUnsplash = async (searchText,page) =>{
    let result = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
          Authorization : "Client-ID xq30_RYLP7GfYXtaBnMB4vLq1VPXrFXgpi3RziO9jVA",
        },
        params:{
            query: searchText,
            per_page : 25,
            page:page,
        },
      });
      console.log("in getFromUnsplash: ",searchText)
      return result.data;
}

export const applySearch = (text) =>
{
    return async (dispatch,currentState) => {
        let response = await getFromUnsplash(text,currentState.page);
        dispatch({
            type: "APPLY_SEARCH",
            payload:{
                searchResult: response.results,
                searchText: text,
            }
        })
    }
}

export function setSearchPage() {
    return {
        type: "SET_SEARCH_PAGE",
    }
}