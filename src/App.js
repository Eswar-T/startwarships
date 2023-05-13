import './App.css';
import { useEffect,useState } from 'react';
import { Box, Typography } from '@mui/material';

const App = () => {
  const [starships, setstarships] = useState([]);

/* code is sorted by crew size before displaying */

  useEffect(()=>{
   fetch('https://swapi.dev/api/starships/')
   .then((res)=>res.json())
   .then((res)=>setstarships(res.results.sort()))
   .catch((err)=>console.log(err,"error"))
  },[])


  return (
    <Box sx={{width:'100%',height:'100%',minHeight:'100vh', backgroundColor:'black'}}>
    <Typography sx={{ fontStyle:'-moz-initial',fontWeight:'bold',textAlign:'center',color:'white' }} variant='h1'>Starwar Ships</Typography>
    
     {
      starships.map((data,index)=>
        <div key={index} className='boxColor'>
        <div className='rowContent'>
          <Typography className='textcolor'>{data.name}</Typography> 
          <Typography className='textcolor'>Number of films : {data.films.length}</Typography> 
        </div>
        <Typography className='textcolor'>Model: {data.model}</Typography> 
        </div>
      )
     }
    
    </Box>
  );
}

export default App;
