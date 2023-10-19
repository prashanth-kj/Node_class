import AxiosService from "../common/ApiService"
import { useState,useEffect } from "react"
import {toast} from 'react-toastify'
import  useLogout from '../Hooks/useLogout'
import Table from 'react-bootstrap/Table';
function Dashboard() {
    let [data,setData]=useState([])
       let logout= useLogout()
     let getUsers=async()=>{
         try {
             
             let res=await AxiosService.get(`/user`)
                console.log(res);
              if(res.status==200){

                setData(res.data.users)

              }
              
         } catch (error) {
                 if(error.response.status==400){
                     toast.error(error.response.data.message);
                     logout()
                 }
                 else
                  {
                    toast.error("Error Occoured! Please try after some time")
                  }
         }
     }

   useEffect(()=>{
         getUsers();
   },[])
      
  return (
    <>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>email</th>
          <th>role</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
      {
                 data.map((e,i)=>{
                     return  <tr key={e._id}>
                          <td>{i+1}</td>
                          <td>{e.firstName}</td>
                          <td>{e.lastName}</td>
                          <td>{e.email}</td>
                          <td>{e.role}</td>
                          <td>{e.status?"active":"InActive"}</td>
                     </tr>
                 })
              }
      </tbody>
    </Table>
      
    </>
  )
}

export default Dashboard
