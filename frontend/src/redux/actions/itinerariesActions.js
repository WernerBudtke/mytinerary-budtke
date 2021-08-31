import axios from 'axios'
const itinerariesActions = {
    getAllItinerariesFromCity: (id) =>{
        return async (dispatch) =>{
            try{
                let res = await axios.get(`http://localhost:4000/api/itinerary/${id}`)
                dispatch({type: 'GET_AN_ITINERARY', payload: res.data.response})
                return {success:true}
            }catch(err){
                return {success:false, error: err}
            }
        }
    },
    resetItineraries: () =>{
        return(dispatch)=>{
            dispatch({type: 'RESET'})
        }
    },
    sendComment: (newComment, oldComment, token, id, action) =>{
        return async ()=>{
            let data = {
                newComment: newComment,
                oldComment: oldComment,
                id: id,
                action: action
            }
            try{
                let res = await axios.put(`http://localhost:4000/api/itinerary/comments`,data,{
                    headers:{
                        authorization: 'Bearer ' + token
                    }
                })
                if(res.data.success){
                    return {success: true}
                }else{
                    throw new Error('comm problem with db')
                }
            }catch(err){
                return {success: false, response: err}
            }
        }
    },
    getActivities: (id) =>{
        return async () => {
            try{
                let res = await axios.get(`http://localhost:4000/api/activity/${id}`)
                if(res.data.success){
                    return {success: true, response: res.data.response}
                }else{
                    throw new Error('comm problem with db')
                }
            }catch(err){
                return {success: false, response: err}
            }
        }
    }
}
export default itinerariesActions