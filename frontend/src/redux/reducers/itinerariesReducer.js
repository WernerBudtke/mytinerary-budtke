const initState = {
    itineraries:[],
    fetching: true,
    error: false,
    errorMsg: ''
}
const itinerariesReducer = (state = initState, action) =>{
    switch(action.type){
        case "GET_ALL_ITINERARIES":
            return {
                ...state,
                error: false,
                itineraries:action.payload,
                fetching: false
            }
        case "GET_AN_ITINERARY":
            return{
                ...state,
                error: false,
                itineraries:action.payload,
                fetching: false
            }
        case "ERROR":
            return{
                ...state,
                error: action.payload.error,
                errorMsg: action.payload.errorMsg
            }
        default:
            return state
    }
}
export default itinerariesReducer