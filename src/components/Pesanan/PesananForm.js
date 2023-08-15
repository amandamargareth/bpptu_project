import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

export default function CreateOrder() {
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [variety, setVariety] = useState("")
    const [quantity, setQuantity] = useState("")
    const [to, setTo] = useState("")
    const [status, setStatus] = useState("Belum Selesai")
    const [validationError,setValidationError] = useState({})


  const createOrder = async (e) => {
    e.preventDefault();
    const formData = new FormData()
        
    formData.append('name', name)
    formData.append('address', address)
    formData.append('city', city)
    formData.append('phone', phone)
    formData.append('variety', variety)
    formData.append('quantity', quantity)
    formData.append('to', to)
    formData.append('status', status)
    
    await axios.post(`http://localhost:8000/api/orders`, formData).then(({data})=>{
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
    <div className="container">
  <div className="row justify-content-center">
    <div className="col-12 col-sm-12 col-md-12">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Form Pesanan</h4>
          <hr />
          <div className="form-wrapper">
            {
              Object.keys(validationError).length > 0 && (
                <div className="row">
                  <div className="col-12">
                    <div className="alert alert-danger">
                      <ul className="mb-0">
                        {
                          Object.entries(validationError).map(([key, value])=>(
                            <li key={key}>{value}</li>   
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              )
            }
            <Form onSubmit={createOrder}>
              <Row> 
                  <Col>
                    <Form.Group controlId="name">
                        <Form.Label>Nama Pembeli</Form.Label>
                        <Form.Control type="text" value={name} onChange={(event)=>{
                          setName(event.target.value)
                        }}/>
                    </Form.Group>
                  </Col>  
              </Row>
              <Row className="my-3">
                  <Col>
                    <Form.Group controlId="address">
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control as="textarea" rows={3} value={address} onChange={(event)=>{
                          setAddress(event.target.value)
                        }}/>
                    </Form.Group>
                  </Col>
              </Row>
              <Row className="my-3">
                  <Col>
                    <Form.Group controlId="city">
                        <Form.Label>Kota/ Kabupaten</Form.Label>
                        <Form.Select type="select" value={city} onChange={(event)=>{
                          setCity(event.target.value)
                        }}>
                        <option>Pilih Kota/Kabupaten</option>
                        <option>BOGOR</option>
                        <option>SUKABUMI</option>
                        <option>CIANJUR</option>
                        <option>BANDUNG</option>
                        <option>GARUT</option>
                        <option>TASIKMALAYA</option>
                        <option>CIAMIS</option>
                        <option>PANGANDARAN</option>
                        <option>KUNINGAN</option>
                        <option>CIREBON</option>
                        <option>MAJALENGKA</option>
                        <option>SUMEDANG</option>
                        <option>INDRAMAYU</option>
                        <option>SUBANG</option>
                        <option>PURWAKARTA</option>
                        <option>KARAWANG</option>
                        <option>BEKASI</option>
                        <option>BANDUNG BARAT</option>
                        <option>KOTA BOGOR</option>
                        <option>KOTA SUKABUMI</option>
                        <option>KOTA BANDUNG</option>
                        <option>KOTA CIREBON</option>
                        <option>KOTA BEKASI</option>
                        <option>KOTA DEPOK</option>
                        <option>KOTA CIMAHI</option>
                        <option>KOTA TASIKMALAYA</option>
                        <option>KOTA BANJAR</option>
                       </Form.Select>
                    </Form.Group>
                  </Col>
              </Row>
              <Row className="my-3">
                  <Col>
                    <Form.Group controlId="phone">
                        <Form.Label>Nomor HP</Form.Label>
                        <Form.Control type="text" value={phone} onChange={(event)=>{
                          setPhone(event.target.value)
                        }}/>
                    </Form.Group>
                  </Col>
              </Row>
              <Row className="my-3">
                  <Col>
                    <Form.Group controlId="variety">
                        <Form.Label>Jenis Pembelian</Form.Label>
                        
                        <Form.Select type="select" value={variety} onChange={(event)=>{
                          setVariety(event.target.value)
                        }}>
                        <option>Pilih Jenis Pembelian</option>
                        <option>DOC Ayam Sentul</option>
                        <option>DOD Itik Rambon</option>
                        </Form.Select>
                       
                      
                    </Form.Group>
                  </Col>
              </Row>
              <Row className="my-3">
                  <Col>
                    <Form.Group controlId="quantity">
                        <Form.Label>Jumlah Pembelian</Form.Label>
                        <Form.Control type="text" value={quantity} onChange={(event)=>{
                          setQuantity(event.target.value)
                        }}/>
                    </Form.Group>
                  </Col>
              </Row>
              <Row className="my-3">
                  <Col>
                    <Form.Group controlId="to">
                        <Form.Label>Tujuan Pembelian</Form.Label>
                        <Form.Select type="select" value={to} onChange={(event)=>{
                          setTo(event.target.value)
                        }}>
                          <option>Pilih Tujuan Pembelian</option>
                          <option>Bibit</option>
                          <option>Potong</option>
                        </Form.Select>  
                    </Form.Group>
                  </Col>
              </Row>
                   
              <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
               Save
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}