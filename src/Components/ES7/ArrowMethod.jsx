import React from 'react'

export default function ArrowMethod() {
    const Student=[
        {name:"user",email:"user@example.com",phone:1234567890,address:"magalore"},
        {name:"user1",email:"user1@example.com",phone:1234567891,address:"bangalore"},
        {name:"user2",email:"user2@example.com",phone:1234567892,address:"mysore"},
        {name:"user3",email:"user3@example.com",phone:1234567893,address:"udupi"}
    ]
    const num=[1,2,3,4,5]
  return (
    <div>
        {/* {num.map((data)=>{
            return( 
                <h3>{data}</h3>
            )
        })} */}
        <h3>Student Information:</h3>
            <table border={1} >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {Student.map((stud)=>{
        return(
                    <tr>
                        <td>{stud.name}</td>
                        <td>{stud.email}</td>
                        <td>{stud.phone}</td>
                        <td>{stud.address}</td>
                    </tr>
        )
         })}
                </tbody>
            </table>
     
    </div>
  )
}
