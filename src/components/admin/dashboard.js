//import hook react
import React, { useState, useEffect } from 'react';

//import hook useHitory from react router dom
import { useNavigate } from 'react-router';

//import axios
import axios from 'axios';

import List from './order.component';
import ListStock from './stock.admin';
// import DrawerSize from './sidebar';
import Box from '@mui/material/Box';

import TaskCount from './taskCount';


function Dashboard() {

    //state user
    const [user, setUser] = useState({});

    //define history
    const navigate = useNavigate();

    //token
    const token = localStorage.getItem("token");

    //function "fetchData"
    const fetchData = async () => {

        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //fetch user from Rest API
        await axios.get('http://localhost:8000/api/user')
        .then((response) => {

            //set response user to state
            setUser(response.data);
        })
    }

    //hook useEffect
    useEffect(() => {

        //check token empty
        if(!token) {

            //redirect login page
            navigate('/login');
        }
        
        //call function "fetchData"
        fetchData();
    }, []);

    //function logout
    const logoutHanlder = async () => {

        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //fetch Rest API
        await axios.post('http://localhost:8000/api/logout')
        .then(() => {

            //remove token from localStorage
            localStorage.removeItem("token");

            //redirect halaman login
            navigate('/login');
        });
    };

    return (
        <>
        {/* <DrawerSize /> */}
        <Box height={10} />
       <div className="container" style={{ marginTop: "50px" }}>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-body">
                            SELAMAT DATANG <strong className="text-uppercase">{user.name}</strong>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TaskCount />
        {/* // <List />
        // <ListStock /> */}
        </>
    )

}

export default Dashboard;