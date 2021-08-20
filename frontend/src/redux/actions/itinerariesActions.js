import axios from 'axios'
const itinerariesActions = {
    getAllItinerariesFromCity: (id) =>{
        return (dispatch) =>{
            axios.get(`http://192.168.1.4:4000/api/itinerary/${id}`)
            .then(res =>{
                dispatch({type: 'GET_AN_ITINERARY', payload: res.data.response})    
            })
            .catch(err => {
                console.log(err)
                dispatch({type: 'ERROR', payload: {error: true, errorMsg:err}})
            })
        }
    },
    resetItineraries: () =>{
        return(dispatch)=>{
            dispatch({type: 'RESET'})
        }
    }
}
export default itinerariesActions