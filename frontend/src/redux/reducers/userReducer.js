const initState = {
    photoURL:""
}
const userReducer = (state = initState, action) =>{
    switch(action.type){
        case 'USER_LOGGED':
            return{
                photoURL:action.payload
            }
        default:
            return state
    }
}
export default userReducer