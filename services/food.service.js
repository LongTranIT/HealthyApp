import axios from "axios"
class FoodService{
	getAll=async()=>{
		const result= await axios.get(`https://healthy--api.herokuapp.com/thucpham`)
		return result.data
	}
}

export default FoodService