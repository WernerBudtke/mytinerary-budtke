import axios from 'axios'
const userActions = {
    registerUser: (dataUser) =>{
        return async (dispatch) =>{
            try{
                let res = await axios.post(`http://localhost:4000/api/user/register`, dataUser)
                console.log(res)
                if (res.data.success){
                    return {success:true}
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
                console.log(res)
                if (res.data.success){
                    return {success:true}
                }else{
                    throw new Error(res.data.response)
                }
            }catch(err){
                return {success:false, error: err.message}
            }
        }
    }
}
export default userActions