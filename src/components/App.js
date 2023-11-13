import {useState , useEffect } from 'react'
import AllTransactions from './AllTransactions'
import "./App.css"
import Search from './Search'
import FormInput from './FormInput'

//import { handleSearch } from './Search'

function App() {
  // useState is important since it helps us keep truck and add new elements dainamicaly
  const [transaction,isTransaction] = useState([])
  const [input, addInput] = useState({})
  //const [searchdata, setSearch] = useState("")

    

  //useEffect is used to make the request once when the Dom loads 
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(res => res.json())
      .then(data => {
        // the new data is stored on the firs state
        isTransaction(data)
      })
     
  },[])

  function handleSubmit(e){
    e.preventDefault() 
   // console.log(input)
   
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


//console.log(transaction)
  return (
    <div>
    <Search  transaction={transaction} />
    <FormInput  input={input} addInput={addInput} />
    
      <AllTransactions transact={transaction}  />
     
    </div>
  )
}

export default App
 
