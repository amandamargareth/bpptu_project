import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'
import Navbar from './navbar.admin';
import { Row, Col } from "react-bootstrap";


export default function ListStock() {

    
    const [stocks, setStocks] = useState([])

    useEffect(()=>{
        fetchStocks() 
    },[])

    const fetchStocks = async () => {
        await axios.get(`http://localhost:8000/api/stocks`).then(({data})=>{
            setStocks(data)
        })
    }
    
    
   


    return (
        <>

    <br />
      <div className="container">
          <div className="row">
            <div className="col-9">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead className='position: sticky; top: 0; z-index: 1;'>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Jenis</th>
                                    <th>Jumlah</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    stocks.length > 0 && (
                                        stocks.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.id}</td>
                                                <td>{row.stock_name}</td>
                                                <td>{row.stock_quantity}</td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
      </div>
      </>
    )
}