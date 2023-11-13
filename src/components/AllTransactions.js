import React from 'react'

function AllTransactions({transact}) {

  return (
    <table >
       <thead>
            <tr>
               <th style={{color:"green"}}>Date</th>
               <th style={{color:"green"}}>Description </th>
               <th style={{color:"green"}}>category </th>
               <th style={{color:"green"}}>Amount </th>
               
            </tr>
        </thead>
        <tbody>
          {
             transact.map( (data) => {
              //  //console.log(data)
                  return (
            <tr key={data.id} >
              <td style={{color: "#cf1b3f" }}> {data.date}</td> 
              <td style={{color:"blue"}}>{data.description}</td> 
              <td style={{color:"blue"}}> {data.category}</td> 
              <td style={{color: "#cf1b3f"}}> {data.amount}</td>
            </tr>
            )}
            )} 
       </tbody>   
    </table>

  )
}

export default AllTransactions
