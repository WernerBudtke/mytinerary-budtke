import {useEffect, useState} from "react"
import CitiesInput from "./CitiesInput"
import City from "./City"
const Maincities = ({dataApi}) => {
    const [data, setData] = useState(dataApi)
    useEffect(() =>{
        setData(dataApi)
    },[dataApi])
    const handleFilter = (e) =>{
        console.log(dataApi)
        // setData(dataApi.filter(object => object.city.toLowerCase().split(' ').join('').includes(e.target.value.toLowerCase().split(' ').join('')))) // el mejor filtro
        setData(dataApi.filter(object => object.city.toLowerCase().startsWith(e.target.value.toLowerCase().trim())))
    }
    return (
        <main className="mainCities" >
            <CitiesInput myFunction={handleFilter}/>
            <div className="cardCitiesContainer" style={data.length > 0 ? {display:"flex"} : {display:"none"}}>
                {data.map(city => <City key={city.id} cityName={city.city} country={city.country} image={city.image} description={city.description}/>)}
            </div>
            <div className="noCitiesContainer" style={data.length === 0 ? {display:"block"} : {display:"none"}}>
                <p>UNABLE TO FIND THAT ONE, TRY AGAIN!</p>
            </div>
        </main>
    )
}
export default Maincities