const initState = {
    itineraries:[],
    fetching: true,
    // itineraryComments:[]
}
const itinerariesReducer = (state = initState, action) =>{
    switch(action.type){
        case "GET_AN_ITINERARY":
            return{
                ...state,
                itineraries:action.payload,
                fetching: false
            }
        case "RESET":
            return initState
        // case "GET_COMMENTS":
        //     return{
        //         ...state,
        //         itineraryComments:action.payload
        //     }
        default:
            return state
    }
}
export default itinerariesReducer