import axios from 'axios'
const userActions = {
    registerUser: (dataUser) =>{
        return async (dispatch) =>{
            try{
                let res = await axios.post(`http://localhost:4000/api/user/register`, dataUser)
                if (res.data.success){
                    dispatch({type:'USER_LOGGED', payload: res.data.response})
                    return {success:true, response:res.data.response}
                }else{
                    throw new Error(res.data.response)
                }
            }catch(err){
                return {success:false, error: err.message}
            }
        }
    },
    loginUser: (dataUser)=>{
        return async (dispatch) =>{
            try{
                let res = await axios.post(`http://localhost:4000/api/user/login`, dataUser)
                if (res.data.success){
                    dispatch({type:'USER_LOGGED', payload: res.data.response})
                    return {success:true , response:res.data.response}
                }else{
                    throw new Error(res.data.response)
                }
            }catch(err){
                return {success:false, error: err.message}
            }
        }
    },
    logOut: () =>{
        return (dispatch)=>{
            dispatch({type: 'LOGOUT'})
        }
    },
    logInLS: (savedUser) =>{
        return async (dispatch) => {
            try{
                let res = await axios.get('http://localhost:4000/api/user/valid',{
                    headers:{
                        'Authorization': savedUser.token
                    }
                })
                if(res.data.success){
                    dispatch({type: 'USER_LOGGED', payload: savedUser})
                    return {success:true}
                }else{
                    throw new Error('Invalid user')
                }
            }catch(err){
                return {success: false, error: err.message}
            }
        }
    }
}
export default userActions