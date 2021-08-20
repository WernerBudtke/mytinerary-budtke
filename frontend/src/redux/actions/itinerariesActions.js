import axios from 'axios'
const itinerariesActions = {
    getAllItinerariesFromCity: (id) =>{
        return async (dispatch) =>{
            try{
                let res = await axios.get(`http://192.168.1.4:4000/api/itinerary/${id}`)
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
    }
}
export default itinerariesActions