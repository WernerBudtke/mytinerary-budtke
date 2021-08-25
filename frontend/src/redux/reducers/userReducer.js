const initState = {
    photoURL:"",
    token: "",
    firstName: ""
}
const userReducer = (state = initState, action) =>{
    switch(action.type){
        case 'USER_LOGGED':
            console.log(action.payload)
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('firstName', action.payload.firstName)
            localStorage.setItem('photoURL', action.payload.photoURL)
            // localStorage.setItem('_id', action.payload._id)
            return{
               ...action.payload,
            }
        case 'LOGOUT':
            localStorage.clear()
            return initState  
        default:
            return state
    }
}
export default userReducer