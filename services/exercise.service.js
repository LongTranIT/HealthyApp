import axios from "axios"
class ExerciseService{
	getAll=async()=>{
		const result= await axios.get(`http://10.0.2.2:3000/baitap`)
		return result.data
	}
	getById=async(id)=>{
		const result= await axios.get(`${process.env.REACT_APP_BASE_URL}/baitap/${id}`)
		return result.data
	}
}

export default ExerciseService