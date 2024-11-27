import React ,{ useState} from 'react';
const Form=()=>{
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
     
    //message displayed when clicked submit button
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}, Age: ${age}`);
      };
  
    return(
        <>
          <form onSubmit={handleSubmit}>
              <label>Name:
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name" 
              /></label><br></br>
    
            <label>Age:
              <input 
                type="number" //automatically inc & dec by assigning type number
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
                placeholder="Enter your Age" 
                
            /></label>
            <button type="submit">Submit</button>
          </form>
          </>
        );
}
export default Form;

