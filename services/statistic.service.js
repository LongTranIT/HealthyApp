import axios from "axios"
class StatisticService{
	getAll=async()=>{
		const result= await axios.get(`${process.env.REACT_APP_BASE_URL}/thongke`)
		return result.data
	}
	getByDate=async(data)=>{
		const result= await axios.get(`${process.env.REACT_APP_BASE_URL}/thongke`,{
			params:data
		})
		return result.data
	}
	getDates=async(idNguoiDung)=>{
		const result= await axios.get(`${process.env.REACT_APP_BASE_URL}/thongke/date`,{
			params:idNguoiDung
		})
		return result.data
	}
	getById=async(id)=>{
		const result= await axios.get(`${process.env.REACT_APP_BASE_URL}/thongke/`+id)
		return result.data
	}
	getByRange=async(data)=>{
		const result= await axios.get(`${process.env.REACT_APP_BASE_URL}/thongke/`,{
			params:data
		})
		return result.data
	}
	updateWeight=async(id,weight)=>{
		const result= await axios.patch(`${process.env.REACT_APP_BASE_URL}/thongke/`+id,{
			can_nang: weight
		})
		return result.data
	}
	addMenu=async(data)=>{
		const result= await axios.post(`${process.env.REACT_APP_BASE_URL}/thongke/thucdon`,data)
		return result.data
	}
	addExercise=async(data)=>{
		const result= await axios.post(`${process.env.REACT_APP_BASE_URL}/thongke/baitap`,data)
		return result.data
	}

	deleteMenu= async(idStatistic,idMenu)=>{
		const result= await axios.post(`${process.env.REACT_APP_BASE_URL}/thongke/deletemenu/`+idStatistic,{idMenu})
		return result.data
	}
}

export default StatisticService