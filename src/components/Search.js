import React from 'react'

function Search( {transaction  ,searchdata,setSearches }) {
    //console.log(searchdata)
    function handleSearch(e){
        e.preventDefault()
        if (!true) return (setSearches(transaction)) 

        const results = transaction.filter( transact => {
            transact.description.includes(e.target.value)
        })

      setSearches(results)
       e.target.reset()
      //console.log(results)
      }
   
  return (
    <>
       <form onSubmit={handleSearch}>
      <label>Search by description 
        <input
          type="text" 
          value={searchdata}
          onChange={(e) => setSearches(e.target.value)}
         
        />
      </label>
      <button type='search'>Search</button>
    </form> <br /> <br />
    </>
  )
}

export default Search
