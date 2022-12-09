import axios from "axios"
class AccountService{
	login=async(username, password)=>{
		const result= await axios.post(`http://10.0.2.2:3000/login`,{username, password})
		return result.data
	}
	signUp=async(accountData)=>{
		const result= await axios.post(`${process.env.REACT_APP_BASE_URL}/taikhoan`,accountData)
		return result.data
	}
}

export default AccountService