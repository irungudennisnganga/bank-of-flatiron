import {useState , useEffect} from 'react'
import AllTransactions from './AllTransactions'


function App() {
  const [transaction,isTransaction] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then(res => res.json())
      .then(data => {
        isTransaction(data)
      })

  },[])
console.log(transaction)
  return (
    <div>
      <AllTransactions transact={transaction} />
    </div>
  )
}

export default App
