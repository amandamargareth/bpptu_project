import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom'

export default function CreateProduct() {
    const navigate = useNavigate();

    const { id } = useParams()

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [variety, setVariety] = useState("")
    const [quantity, setQuantity] = useState("")
    const [to, setTo] = useState("")
    const [validationError,setValidationError] = useState({})

    useEffect(()=>{
        fetchOrder()
    },[])
    
    const fetchOrder = async () => {
    await axios.get(`http://localhost:8000/api/orders/${id}`).then(({data})=>{
        const { name, address, city, phone, variety, quantity, to } = data.product
        setName(name)
        setAddress(address)
        setCity(city)
        setPhone(phone)
        setVariety(variety)
        setQuantity(quantity)
        setTo(to)
    }).catch(({response:{data}})=>{
        Swal.fire({
        text:data.message,
        icon:"error"
        })
    })
    }

      const updateOrder = async (e) => {
        e.preventDefault();
    
        const formData = new FormData()
        formData.append('_method', 'PATCH');
        formData.append('name', name)
        formData.append('address', address)
        formData.append('city', city)
        formData.append('phone', phone)
        formData.append('variety', variety)
        formData.append('quantity', quantity)
        formData.append('to', to)
    
        await axios.post(`http://localhost:8000/api/orders/${id}`, formData).then(({data})=>{
          Swal.fire({
            icon:"success",
            text:data.message
          })
          navigate("/order/list")
        }).catch(({response})=>{
          if(response.status===422){
            setValidationError(response.data.errors)
          }else{
            Swal.fire({
              text:response.data.message,
              icon:"error"
            })
          }
        })
      }
      
      return(
        <div className='pesanan'>
            <Form onSubmit={updateOrder}>
                <h3>Form Pesanan</h3>
                <div>
                <Form.Label>Nama Pembeli</Form.Label>
                    <input type="text" placeholder='Masukan Nama' className='form-control'></input>
                </div>
                <div>
                <Form.Label>Alamat</Form.Label>
                    <input type="text" className='form-control'></input>
                </div>

                <div>
                <Form.Label>Jenis Pembelian</Form.Label>
                    <select type="checkbox"  className='form-control'> 
                    <option>DOC Ayam Sentul</option>
					<option>DOD Ayam Itik Rambon</option>
                    </select>
                </div>
                <div>
                <Form.Label>Jumlah Ekor</Form.Label>
                    <input type="text" className='form-control'></input>
                </div>
            </Form>

        </div>
      )
}