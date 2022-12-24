import React, { useEffect, useState } from 'react'
import { Pagingation } from '../Coponents/Pagingation';
import { UserFetchData } from '../Coponents/UserFetchData';

export const UserDetails = () => {
    const [data,setData] = useState([]);
    const [page,setPage] = useState(1);
    const [gen,SetGen] = useState("");



    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=10&page={page}&gender={gen}`)
        .then((res) => res.json())
        .then((res) => setData(res.results))
        .catch((err) => console.log(err))
    },[page,gen])
   // console.log("data",data);
   const nextPage = () => {
    setPage((prev) => prev +1)
   }
   const prevPage = () => {
    setPage((prev) => prev -1)
   }
   console.log("gen",gen);
   console.log(data);
  return (
    <div>
        <div>
            <select onChange={(e) => SetGen(e.target.value)}>
                <option >None</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

        </div>
        <div>
 <Pagingation page={page} nextPage={nextPage} prevPage={prevPage}/>
      </div>
        <div>
         <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {data && data.map((el) => { return(
 <UserFetchData data={el} />
        )
           
        })}
                </tbody>
            </table>
            </div>
           
    </div>
  )
}
