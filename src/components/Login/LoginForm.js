import { useEffect, useState } from 'react';
import './LoginForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { Link } from 'react-router';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [validation, setValidation] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate('/Login/LoginForm');
        }
    }, []);

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('email', email);
        formData.append('password', password);

        await axios.post('http://localhost:8000/api/login', formData)
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            navigate('/order/list')
        })
        .catch((error) => {
            setValidation(error.response.data);
        })

    };

    return(
    <div className='wrapper  d-flex align-items-center justify-content-center w-100'>
        <div className='login'>
            <h2 className='mb-3'>LOGIN</h2>
            
            <form onSubmit={loginHandler}>
            <div className='form-group was-validated mb-2'>
                {
                    validation.message && (
                        <div className="alert alert-danger">
                            {validation.message}
                        </div>
                    )
                }
                <label htmlFor='email' className='form-label' >Username</label>
                <input type="text" className='form-control' required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <div classname="invalid-feedback">
                    Masukan email atau username
                </div>
            </div>
            <div className='form-group was-validated mb-2'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input type="password" className='form-control' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <div classname="invalid-feedback">
                    Masukan password
                </div>
            </div>
            <div className='form-group form-check mb-2'>
                <input type="checkbox" className='form-check-input'></input> 
                <label htmlFor='check' className='form-check-label'>Remember me</label>
                 
            </div>
            <button type='submit' className='btn btn-success block w-100 mt-2'>LOGIN</button>
            </form>
        </div>
        </div>
    )
}

export default LoginForm;