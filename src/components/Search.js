import { useState ,useEffect } from "react";

function Search( {transaction }) {
    const [searchdata, setSearch] = useState("")
 
    const handleSearch = (event) => {
        event.preventDefault()

        const filtered = transaction.filter(transact=>
          transact.description.includes(searchdata)
        );
        setSearch(filtered);
       // console.log(filtered) 
       
      };
    //  
   return (
    <>
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
    </>
  )
}

export default Search
