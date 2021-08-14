import axios from "axios"
import { useState } from "react"
const PostCity = () =>{
    const [data, setData] = useState({})
    function addNewCity(){
        axios.post('http://192.168.1.4:4000/api/addcityofcities', data).then(res => {
        if(res.data.success){
            console.log("fue un exito")
        }
    })}
    const inputHandler = (e) =>{
        setData({id: 15, city: "Lima", country:"Perú", image:"lima.jpg", description:"Capital del Perú"})
        console.log(data)
    }
    return(
        <div>
            <input type="text" onChange={inputHandler}></input>
            <button onClick={addNewCity}>SUBMIT</button>
        </div>
    )
}
export default PostCity