const initialState = localStorage.getItem("isAuthenticated");

let reducer = (state = initialState, action) => {
    console.log(state);
    console.log("in reducer");
    if(action.type === "AUTHENTICATE"){
        console.log("in AUTHENTICATE");
        return {
            isAuthenticated : true
        }
    }
    return state;
}

export default reducer;