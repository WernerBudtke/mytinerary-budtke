const citiesReducer = (state = {cities:[], filteredCities:[]}, action) =>{
    switch(action.type){
        case "GET_ALL_CITIES":
            return {
                ...state,
                cities:action.payload,
                filteredCities:action.payload
            }
        case "GET_A_CITY":
            return{
                ...state,
                filteredCities:state.cities.filter(object => object.city.toLowerCase().startsWith(action.payload.toLowerCase().trim()))
            }
        default:
            return state
    }
}
export default citiesReducer

// el reducer estará a la escucha de las action de mis componentes
// y del estado del state centralizado
// de acuerdo a la action que reciba, debe modificar el store
