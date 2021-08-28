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
    // getCommentsFromItinerary: (id)=>{
    //     return async (dispatch) =>{
    //         try{
    //             let res = await axios.get(`http://localhost:4000/api/itinerary/comments/${id}`)
    //             dispatch({type: 'GET_COMMENTS', payload: res.data.response})
    //             return {success:true}
    //         }catch(err){
    //             return {success:false, error: err}
    //         }
    //     }
    // },
    resetItineraries: () =>{
        return(dispatch)=>{
            dispatch({type: 'RESET'})
        }
    },
    sendComment: (newComment, oldComment, token, id, action) =>{
        return async (dispatch)=>{
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
                console.log('test')
                // dispatch({type: 'UPDATE_ITINERARY', payload: res.data.response})
                return {success: true, response: res.data.response}
            }catch(err){
                return {success: false, response: err}
            }
        }
    }
}
export default itinerariesActions