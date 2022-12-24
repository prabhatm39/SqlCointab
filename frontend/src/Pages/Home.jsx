import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FetchData } from '../Coponents/FetchData';

export const Home = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const calldata = () => {
        if(data.length==0){
            fetch('https://randomuser.me/api/?results=50')
            .then((res) => res.json())
            .then((res) => setData(res.results))
            .catch((err) => console.log(err))
        }
        else{
            alert('Data is already present')
        }
    }
    //console.log(data);

    const deleteData = () => {
        if(data.length){
            setData([]);
        }
        else{
            alert('No Data Present')
        }
       
       
    }
 const nav = () => {
    navigate('/user')
 }
  
  
  return (
    <div>
        <div>
            <button onClick={calldata}>Fetch Users</button>
            <button onClick={deleteData}>Delete Users</button>
            <button onClick={nav}>User Details</button>
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
 <FetchData data={el} />
        )
           
        })}
                </tbody>
            </table>
       
        </div>
       
    </div>
  )
}
