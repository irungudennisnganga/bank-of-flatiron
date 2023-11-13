import React from 'react'



function FormInput({input,addInput}) {
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
    </div>
  )
}

export default FormInput
