import { connect } from "react-redux"
import citiesActions from "../redux/actions/citiesActions"

const CitiesInput = ({myFunction}) =>{
    return(
        <div className="filterCitiesImage" style={{backgroundImage:`url('/assets/fotohero.jpg')`}}>
            <div className="filterCitiesContainer">
                <h2>Find the perfect travel destination for your trip</h2>
                <p>Are you looking for romantic beaches in Santa Fe? The perfect vacation with your children in Baigorria?</p>
                <p>Or do you prefer sightseeing in Capitán Bermúdez? Explore our cities <span className="specialText">NOW!</span></p>
                <input type="search" id="search-cities" placeholder="Search by city" onChange={(e) => myFunction(e.target.value)}></input>
            </div>
        </div>
    )
}
const mapDispatchToProps = {
    myFunction: citiesActions.filterCities
}
export default connect(null, mapDispatchToProps)(CitiesInput)