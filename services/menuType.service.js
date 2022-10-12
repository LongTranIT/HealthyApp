import axios from "axios"
class MenuTypeService{
	getAll=async(idNguoiDung)=>{
		const result= await axios.get(`${process.env.REACT_APP_BASE_URL}/loaithucdon`,
			{params:{idNguoiDung}}
		)
		return result.data
	}
	addMenu=async(data)=>{
		// const ID_THUC_DON_TU_TAO=`62fa11c76f8ef04029c3beb4`
		const result= await axios.put(`${process.env.REACT_APP_BASE_URL}/loaithucdon/`,data)
		return result.data
	}
	add=async(data)=>{
		// const ID_THUC_DON_TU_TAO=`62fa11c76f8ef04029c3beb4"
		const result= await axios.post(`${process.env.REACT_APP_BASE_URL}/loaithucdon/`,data)
		return result.data
	}
}

export default MenuTypeService