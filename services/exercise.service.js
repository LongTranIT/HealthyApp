import axios from "axios"
class ExerciseService{
	getAll=async()=>{
		const result= await axios.get(`${process.env.REACT_APP_BASE_URL}/nhomco`)
		return result.data
	}
	getById=async(id)=>{
		const result= await axios.get(`${process.env.REACT_APP_BASE_URL}/baitap/${id}`)
		return result.data
	}
}

export default ExerciseService