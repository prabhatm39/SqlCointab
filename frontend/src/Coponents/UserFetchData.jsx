import React from 'react'

export const UserFetchData = ({data}) => {
  return (
    
          <tr>
        <td>{data.name.first}</td>
        <td>{data.name.last}</td>
        <td>{data.dob.age}</td>
        <td>{data.gender}</td>
        <td>{data.email}</td>
        <td>{data.location.city}</td>
        <td>{data.phone}</td>
    </tr>
  )
}
