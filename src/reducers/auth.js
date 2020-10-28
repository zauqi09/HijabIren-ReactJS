const initialState = {
    isLoggedIn: false,
    userListFromApp:[{
        email : "admin@admin.com",
        name : "admin",
        password : "123",
        type : 1
      },{
        email : "zauqi09@gmail.com",
        name : "Fuad Zauqi Nur",
        password : "123",
        type : 1
      }],
    dataLogin : {},
    dataRegister :{}
}


const authReducer = (state = {}, action) => {
    
    switch (action.type) {
        case "LOGIN":
            return {
                isLoggedIn: true,
                dataLogin: action.payload.dataLogin,
                userListFromApp: action.payload.userlist
            }
        case "SAVETOREDUX":
            return {
                userListFromApp: [...initialState.userListFromApp, ...action.payload]
            }
        case "LOGOUT":
            return {
                isLoggedIn: false,
                dataLogin : {},
                userListFromApp: action.payload
            }
        case "REGISTER":
            return {
                userListFromApp: [...action.payload.userlist, action.payload.dataRegister]
            }
        default:
            return state
        }
    }
export default authReducer