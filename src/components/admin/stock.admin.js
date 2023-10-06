import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'
import Navbar from './dashboard';
import { Row, Col } from "react-bootstrap";
import { Box } from '@mui/material';
// import DrawerSize from './sidebar'


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
    
    const deleteStock = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            return result.isConfirmed
          });

          if(!isConfirm){
            return;
          }

          await axios.delete(`http://localhost:8000/api/stocks/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchStocks()
          }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
          })
    }

    
    
   


    return (
        <>
          {/* <DrawerSize /> */}
    <Box height={10} />
    <br />
      <div className="container" style={{ marginTop: "50px" }}>
        <h2>Data Stok</h2>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card border-0 rounded shadow-sm">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead className='position: sticky; top: 0; z-index: 1;'>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Jenis</th>
                                    <th>Jumlah</th>
                                    <th>Action</th>
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
                                                <td>
                                                    <Link to={`/stock/edit/${row.id}`} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                </td>
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
      </div>
      <br />
      </>
    )
}