import axios from 'axios'
const citiesActions = {
    getAllCities: () =>{
        return (dispatch) =>{ // se puede utilizar param getState para traerme el store actual.
            axios.get('http://192.168.1.4:4000/api/cities')
            .then(res => {
            if(res.data.success){
                if(res.data.response.length > 0){
                    dispatch({type:"GET_ALL_CITIES", payload:res.data.response})
                }else{
                    throw new Error("No cities found in db")
                }
            }else{
                throw new Error(res.data.response)
            }
            })
            // .catch(err => {
            // console.error(err)
            // props.history.push('/error')
            // })
        }
    },
    filterCities: (inputValue) =>{
        return (dispatch) =>{
            dispatch({type: 'GET_A_CITY', payload:inputValue})
        }
    }
}
export default citiesActions