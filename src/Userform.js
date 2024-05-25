import { Button, Grid, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";


const Userform = ({addUser , submitted ,data, isEdit,updateUser}) => {

const[id,setID] = useState(0);
const[name,setName] = useState('');

useEffect(() =>{
    if(!submitted){
        setID(0)
        setName('')
    }
},[submitted]);

useEffect(() =>{
    if(data?.id  && data.id !== 0){
        setID(data.id)
        setName(data.name)
    }
},[data]);

return(
  <Grid
  container
  spacing={2}
  sx={{ 
    backgroundColor: "white",
    marginBottom: '30px',
    display: 'block',
   }}
  >   

    <Grid item xs={12}>
<Typography component={'h1'} sx={{ 
    color: 'white',
 }}>User Form</Typography>
</Grid> 

<Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
    <Typography
    component={'lable'} sx={{ 
        color: 'black',
        marginRight:'20px',
        fontSize: '16px',
        width: '100px',
        display: 'block',
     }}
    >ID
    </Typography>
    <Input
    type="number"
    id="id"
    name="id"
    sx={{ 
        width: '400px',

     }}
     value={id}
     onChange={e => setID(e.target.value)}
    />
</Grid>


<Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
    <Typography
    component={'lable'} sx={{ 
        color: 'black',
        marginRight:'20px',
        fontSize: '16px',
        width: '100px',
        display: 'block',
     }}
    >Name
    </Typography>
    <Input
    type="text"
    id="name"
    name="name"
    sx={{ 
        width: '400px',}}
     value={name}
     onChange={e => setName(e.target.value)}
    />
</Grid>


<Button
sx={{ 
    margin: 'auto',
    marginBottom: '20px',
    backgroundColor: '#00c6e6',
    color: 'black',
    marginTop: '20px',
    '&:hover':{
        opacity: '0.7',
        backgroundColor: '#00c6e7',
    }

 }}
 onClick={() => isEdit ? updateUser({id: id, name:name}) : addUser({id: id, name:name})}
 // onClick={() => addUser({id, name})}


>
  {
  isEdit ? 'Update' : 'Add User'
  }
</Button>
    </Grid>
);
}

export default Userform;