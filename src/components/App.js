import {useState , useEffect } from 'react'
import AllTransactions from './AllTransactions'
import "./App.css"
import FormInput from './FormInput'



function App() {
  // useState is important since it helps us keep truck and add new elements dainamicaly
  const [transaction,isTransaction] = useState([])
  const [input, addInput] = useState({})
  const [searchdata, setSearch] = useState("")

    

 

  const handleSearch = (event) => {
    event.preventDefault()

    const filtered = transaction.filter(transact=>
      transact.description.toLowerCase().includes(searchdata.toLocaleLowerCase())
    );
    setSearch(filtered);
   // console.log(filtered) 
   };

   //useEffect is used to make the request once when the Dom loads 
   useEffect(() => {
    fetch("https://my-json-server.typicode.com/irungudennisnganga/json-server/transactions")
      .then(res => res.json())
      .then(data => {
        // the new data is stored on the firs state
        isTransaction(data)
        addInput(data)
      })
    
  },[])

//console.log(transaction)
  return (
    <div>
       <form onSubmit={handleSearch}>
      <label>Search by description 
        <input
          type="text" 
          value={searchdata}
          onChange={(e) => setSearch(e.target.value)}
          required
        />
      </label>
      <button type='search'>Search</button>
    </form> <br /> <br />
    
  
    <FormInput  input={input} addInput={addInput} />
    
      <AllTransactions transact={transaction}  />
     
    </div>
  )
}

export default App
 
