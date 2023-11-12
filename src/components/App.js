import {useState , useEffect } from 'react'
import AllTransactions from './AllTransactions'
import "./App.css"
import Search from './Search'

//import { handleSearch } from './Search'

function App() {
  // useState is important since it helps us keep truck and add new elements dainamicaly
  const [transaction,isTransaction] = useState([])
  const [input, addInput] = useState({})
  const [searchdata, setSearch] = useState("")

  //useEffect is used to make the request once when the Dom loads 
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(res => res.json())
      .then(data => {
        // the new data is stored on the firs state
        isTransaction(data)
      })
     
  },[])

  //this function is used to take the inputs and adds them to the second useState
 function handleChange(e){
  const name = e.target.name;
  const value = e.target.value;
  // the input is stored in the addInptut()
  addInput(values => ({...values, [name]: value}))
 
}

// this function is used to hundle submition of the form
  function handleSubmit(e){
    e.preventDefault() 
   // console.log(input)
   e.target.reset()
   // making a post request to the server to add the input to the db.json
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
 
