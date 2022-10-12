import axios from "axios"
class MenuService{
	getAll=async()=>{
		const result= await axios.get(`${process.env.REACT_APP_BASE_URL}/thucdon`)
		return result.data
	}
	getById=async(id)=>{
		const result= await axios.get(`${process.env.REACT_APP_BASE_URL}/thucdon/${id}`)
		return result.data
	}
	add=async(data)=>{
		const result= await axios.post(`${process.env.REACT_APP_BASE_URL}/thucdon/`,data)
		return result.data
	}
	delete=async(id)=>{
		const result= await axios.delete(`${process.env.REACT_APP_BASE_URL}/thucdon/${id}`)
		return result.data
	}
}

export default MenuService