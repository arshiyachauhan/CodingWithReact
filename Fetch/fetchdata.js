//fetch- used to request data from serer, one parameter( api url)
import React, {useState, useEffect} from 'react';
const Stories= ()=> {
    const [data, setData]= useState([]);//stores API data
    const [isLoading,setIsLoading] = useState(true); //state for 
    const [error, setError] =useState(null);// handles error

    const API_URL = 'https://jsonplaceholder.typicode.com/posts';

    const fetchData= async () => {
        try{
            const response= await fetch(API_URL); //fetching data from URL
            console.log(response);
            if(!response.ok){
                throw new Error('Network response was not ok');//handle bad response
            }
            const result= await response.json(); //convert to json
            console.log(result);
            setData(result);
            setIsLoading(false);
        }catch(err){
            setError(err.message);//handle errors
            setIsLoading(false);//set loading to false
        }
    };

    useEffect(() => {
        fetchData();//fetch data when component mounts
    }, []); //empty dependency array ensures it runs once on mount

    //Show loading state
    if(isLoading){
        return <h1>Loading...</h1>;
    }
    //Show error if exists
    if(error){
        return<h1>Error: {error}</h1>;
    }
  
    //Render fetched data
    return(
        <div>
            <h1>Fetched Data</h1>
            <ol>
                {data.map((item)=> (//limiting data to first 10 items
                    <li key={item.id}>{item.title}</li>
                    ))}
            </ol>
        </div>
    );

};

export default Stories;
