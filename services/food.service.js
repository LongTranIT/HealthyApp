import axios from "axios"
class FoodService{
	getAll=async()=>{
		const result= await axios.get(`http://10.0.2.2:3000/thucpham`)
		return result.data
	}
}

export default FoodService