import {useState , useEffect } from 'react'
import AllTransactions from './AllTransactions'
import "./App.css"
import Search from './Search'

//import { handleSearch } from './Search'

function App() {
  const [transaction,isTransaction] = useState([])
  const [input, addInput] = useState({})
  const [searchdata, setSearch] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(res => res.json())
      .then(data => {
        isTransaction(data)
      })
     
  },[])
 function handleChange(e){
  const name = e.target.name;
  const value = e.target.value;
  addInput(values => ({...values, [name]: value}))
 
}

  function handleSubmit(e){
    e.preventDefault() 
   // console.log(input)
   e.target.reset()
   
    fetch(`http://localhost:8001/transactions`, {
      method:"POST",
      headers:{
        "content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body:JSON.stringify(input)
    
    })
  
}

 

  // 
//console.log(transaction)
  return (
    <div>
    <Search searchdata={searchdata} transaction={transaction} setSearches={setSearch}/>

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
 
