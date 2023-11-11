import React from 'react'

function AllTransactions({transact}) {
   // console.log(transact)
 let list=  transact.map( data => {
 //console.log(data)
    return (
    <table key={data.id}>
        <thead>
            <tr>
               <th style={{color:"green"}}>Category : {data.category}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               <td style={{color:"blue"}}>Description : {data.description}</td> 
            </tr>
            <tr>
              <td style={{color: "#cf1b3f"}}>Date : {data.date}</td>
            </tr>
            <tr>
              <td style={{color: "#cf1b3f"}}>Amount : {data.amount}</td>
            </tr>
        </tbody>   
    </table>
    )
       
   }) 

  return (
    <div >
       {list}
    </div>
  )
}

export default AllTransactions
