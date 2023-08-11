import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'

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
      <div className="container">
          <div className="row">
            <div className='col-12'>
                <Link className='btn btn-primary mb-2 float-end' to={"/order/create"}>
                    Buat Pesanan
                </Link>
            </div>
            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Pembeli</th>
                                    <th>Alamat</th>
                                    <th>Kabupaten/Kota</th>
                                    <th>No HP</th>
                                    <th>Jenis Pembelian</th>
                                    <th>Total Ekor</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
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
                                                <td>{row.status}</td>
                                                <td>
                                                    <Link to={`/product/edit/${row.id}`} className='btn btn-success me-2'>
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
                        </table>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}