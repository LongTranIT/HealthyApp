import axios from "axios"
class UserService{
	getUsers=async()=>{
		const result= await axios.get(`${process.env.REACT_APP_BASE_URL}/nguoidung`)
		return result.data
	}
	addUser=async(data)=>{
		const result= await axios.post(`${process.env.REACT_APP_BASE_URL}/nguoidung`,data)
		return result.data
	}
	updateUser=async(id,data)=>{
		const result= await axios.patch(`${process.env.REACT_APP_BASE_URL}/nguoidung/${id}`,data)
		return result.data
	}
}

export default UserService