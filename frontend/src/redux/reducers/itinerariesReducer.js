const initState = {
    itineraries:[],
    fetching: true,
}
const itinerariesReducer = (state = initState, action) =>{
    switch(action.type){
        case "GET_AN_ITINERARY":
            return{
                ...state,
                error: false,
                itineraries:action.payload,
                fetching: false
            }
        case "RESET":
            return initState
        default:
            return state
    }
}
export default itinerariesReducer