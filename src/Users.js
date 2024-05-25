import { Box } from "@mui/material";
import Userform from "./Userform";
import Usertable from "./Usertable";
import Axios from "axios";
import { useEffect, useState } from "react";



const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [isEdit, setIsedit] = useState(false);
    const [selectedUser , setSelectedUser] = useState();

    useEffect(() =>{
        getUsers();
    }, []);
    //dependency array [eka athule mokuth naththam componnt eka load weddi wada]

    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
        .then(response =>{

        //console.log(response.data.response);

            setUsers(response?.data?.response || []);

        })
        .catch(error => {
            console.error("Axios Error :", error);
        });

    }
    const addUser = (data) =>{
        setSubmitted(true);

        const payload ={
            id: data.id,
            name: data.name,
        }

        Axios.post('http://localhost:3001/api/createuser',payload)
        .then(response =>{
                getUsers();
                setSubmitted(false);
                isEdit(false);
    
            })
            .catch(error => {
                console.error("Axios Error :", error);
            });
    }

    const updateUser = (data) => {
        setSubmitted(true);

        const payload ={
            id: data.id,
            name: data.name,
        }
        Axios.post('http://localhost:3001/api/updateuser',payload)
        .then(response =>{
                getUsers();
                setSubmitted(false);
    
            })
            .catch(error => {
                console.error("Axios Error :", error);
            });

    }
    const deleteUser = (data) => {
     
        Axios.post('http://localhost:3001/api/deleteuser',data)
        .then(response =>{
                getUsers();
                setSubmitted(false);
    
            })
            .catch(error => {
                console.error("Axios Error :", error);
            });

    }

return (
    <Box
    sx={{ 
width: 'calc(100% - 100px)',
margin: 'auto',
marginTop: '100px',
     }}
    >
<Userform 
 addUser = {addUser}
 updateUser = {updateUser}
 submitted = {submitted}
 data={selectedUser}
 isEdit={isEdit}
/>
<Usertable 
rows={users}
selectedUser = {data =>{
setSelectedUser(data);
setIsedit(true);
}}
deleteUser={data => window.confirm('Are you sure you want to delete?') && deleteUser(data)}
/>
    </Box>

);
}

export default Users;