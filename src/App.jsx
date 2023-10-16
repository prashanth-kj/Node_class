import axios from "axios"
import { useState,useEffect } from "react"
function App() {
    let [data,setData]=useState([])

     let getUsers=async()=>{
         try {
             
             let res=await axios.get(`${import.meta.env.VITE_API_URL}/user`)
                console.log(res);
              if(res.status==200){

                setData(res.data.users)

              }
              
         } catch (error) {
           console.log(error);
         }
     }

   useEffect(()=>{
         getUsers();
   },[])
      
  return (
    <>
      <h1>Welcome</h1>
      <table>
          <thead>
              <tr>
                  <th>firstName</th>
                  <th>lastName</th>
                  <th>email</th>
                  <th>role</th>
                  <th>status</th>
              </tr>
          </thead>
           <tbody>
              {
                 data.map((e)=>{
                     return  <tr key={e._id}>
                          <td>{e.firstName}</td>
                          <td>{e.lastName}</td>
                          <td>{e.email}</td>
                          <td>{e.role}</td>
                          <td>{e.status?"active":"InActive"}</td>
                     </tr>
                 })
              }
           </tbody>
      </table>
    </>
  )
}

export default App
