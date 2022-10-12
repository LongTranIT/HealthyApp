import axios from "axios"
class MenuDetailService{
	getAll=async()=>{
		const result= await axios.get(`${process.env.REACT_APP_BASE_URL}/chitietthucdon`)
		return result.data
	}
	getById=async(id)=>{
		const result= await axios.get(`${process.env.REACT_APP_BASE_URL}/chitietthucdon/${id}`)
		return result.data
	}
	add=async(data)=>{
		const result= await axios.post(`${process.env.REACT_APP_BASE_URL}/chitietthucdon/`,data)
		return result.data
	}
}

export default MenuDetailService