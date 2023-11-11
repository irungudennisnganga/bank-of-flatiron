import {useState , useEffect} from 'react'
import AllTransactions from './AllTransactions'
import "./App.css"

function App() {
  const [transaction,isTransaction] = useState([])
  const [input, addInput] = useState({})


 function handleChange(event){
  const name = event.target.name;
  const value = event.target.value;
  addInput(values => ({...values, [name]: value}))
 
}

  function handleSubmit(event){
    event. preventDefault() 
    console.log(input)
   
    fetch(`http://localhost:3000/transactions`, {
      method:"POST",
      headers:{
        "content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body:JSON.stringify(input)
    
    })
    event.target.reset()
}
useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then(res => res.json())
      .then(data => {
        isTransaction(data)
      })
     
  },[])
//console.log(transaction)
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <input
          
          name='category'
          type='category'
          
          value={input.category || ""}
          placeholder='Enter category'
          onChange={handleChange}
          required
        /> 
        <input 
         name='description'
          type='description'
          
          value={input.description || ""}
          placeholder='Enter description'
          onChange={handleChange}
          required
          
        /> 
        <input 
         name='amount'
          type='amount'
          
          value={input.amount || ""}
          placeholder='Enter amount'
          onChange={handleChange}
          required
          
        /> 
        <input
          type='date'
          name='date'
          
          value={input.date || ""}
          required
          onChange={handleChange}
        /> 
       <button  type="submit">Submit</button>
      </form><br /> <br />
      <AllTransactions transact={transaction} />
    </div>
  )
}

export default App
