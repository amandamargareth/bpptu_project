import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'
import Navbar from './navbar.admin';
import { Row, Col, Table, Container } from "react-bootstrap";


export default function List() {

    
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        fetchOrders() 
    },[])

    const fetchOrders = async () => {
        await axios.get(`http://localhost:8000/api/orders`).then(({data})=>{
            setOrders(data)
        })
    }
    
    const deleteOrder = async (id) => {
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

          await axios.delete(`http://localhost:8000/api/orders/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchOrders()
          }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
          })
    }


    
   


    return (
        <>
    <div className="container" style={{ marginTop: "35px" }}>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card border-0 rounded shadow-sm">
                        
        <div className='card card-body'>
        <div className="table-responsive">
        <table e className="table table-bordered mb-0 text-center">
        <div>
                            <thead className='position: sticky; top: 0; z-index: 1;'>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Pembeli</th>
                                    <th>Alamat</th>
                                    <th>Kabupaten/Kota</th>
                                    <th>No HP</th>
                                    <th>Jenis Pembelian</th>
                                    <th>Total Ekor</th>
                                    <th>Tujuan Pembelian</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='height: 10px !important; overflow: scroll;'>
                                {
                                    orders.length > 0 && (
                                        orders.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.id}</td>
                                                <td>{row.name}</td>
                                                <td>{row.address}</td>
                                                <td>{row.city}</td>
                                                <td>{row.phone}</td>
                                                <td>{row.variety}</td>
                                                <td>{row.quantity}</td>
                                                <td>{row.to}</td>
                                                <td>{row.status}
                                                </td>
                                                <td>
                                                    <Link to={`/order/edit/${row.id}`} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                    <Button variant="danger" onClick={()=>deleteOrder(row.id)}>
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                            </div>
                        </table>

                        </div>
                        </div>
                        </div>
                        
     </div>
                </div>
            </div>
      </>
    )
}