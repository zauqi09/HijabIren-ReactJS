const initialState = {
    isLoggedIn: false,
    //userListFromApp:[],
    dataLogin : {},
    //dataRegister :{}
}


const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true,
                dataLogin: action.payload,
            }
        case "SAVETOREDUX":
            return {
                ...state,
                userListFromApp: action.payload
            }
        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false,
                dataLogin : {},
            }
        case "REGISTER":
            return {
                ...state,
                userListFromApp: [...state.userListFromApp, action.payload.dataRegister]
            }
        default:
            return state
        }
    }
export default authReducer