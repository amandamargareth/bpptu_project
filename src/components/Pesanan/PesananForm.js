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
    const [status, setStatus] = useState("")
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
            <Form onSubmit={CreateOrder}>
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
                        <Form.Select value={city} onChange={(event)=>{
                          setCity(event.target.value)
                        }}>
                          <option>Pilih Kota/ Kabupaten</option>
                          <option value="1">BOGOR</option>
                          <option value="2">SUKABUMI</option>
                          <option value="3">CIANJUR</option>
                          <option value="4">BANDUNG</option>
                          <option value="5">GARUT</option>
                          <option value="6">TASIKMALAYA</option>
                          <option value="7">CIAMIS</option>
                          <option value="8">PANGANDARAN</option>
                          <option value="9">KUNINGAN</option>
                          <option value="10">CIREBON</option>
                          <option value="11">MAJALENGKA</option>
                          <option value="12">SUMEDANG</option>
                          <option value="13">INDRAMAYU</option>
                          <option value="14">SUBANG</option>
                          <option value="15">PURWAKARTA</option>
                          <option value="16">KARAWANG</option>
                          <option value="17">BEKASI</option>
                          <option value="18">BANDUNG BARAT</option>
                          <option value="19">KOTA BOGOR</option>
                          <option value="20">KOTA SUKABUMI</option>
                          <option value="21">KOTA BANDUNG</option>
                          <option value="22">KOTA CIREBON</option>
                          <option value="23">KOTA BEKASI</option>
                          <option value="24">KOTA DEPOK</option>
                          <option value="25">KOTA CIMAHI</option>
                          <option value="26">KOTA TASIKMALAYA</option>
                          <option value="27">KOTA BANJAR</option>
                        </Form.Select>
                    </Form.Group>
                  </Col>
              </Row>
              <Row className="my-3">
                  <Col>
                    <Form.Group controlId="phone">
                        <Form.Label>Nomor HP</Form.Label>
                        <Form.Control value={phone} onChange={(event)=>{
                          setPhone(event.target.value)
                        }}/>
                    </Form.Group>
                  </Col>
              </Row>
              <Row className="my-3">
                  <Col>
                    <Form.Group controlId="variety">
                        <Form.Label>Jenis Pembelian</Form.Label>
                        
                        <Form.Select value={variety} onChange={(event)=>{
                          setVariety(event.target.value)
                        }}>
                        <option>Pilih Jenis Pembelian</option>
                          <option value="1">DOC Ayam Sentul</option>
                          <option value="2">DOC Itik Rambon</option>
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
                        <Form.Select value={to} onChange={(event)=>{
                          setTo(event.target.value)
                        }}>
                          <option>Pilih Tujuan Pembelian</option>
                          <option value="1">Bibit</option>
                          <option value="2">Potong</option>
                        </Form.Select>
                    </Form.Group>
                  </Col>
              </Row>
              <Row className="my-3">
                  <Col>
                    <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                          {['radio'].map((status) => (
                            <div key={`inline-${status}`} className="mb-3">
                              <Form.Check
                                inline
                                label="Selesai"
                                name="group1"
                                type={status}
                                id={`inline-${status}-1`} 
                                value={status} onChange={(event)=>{
                                    setStatus(event.target.value)
                                  }}
                              />
                              <Form.Check
                                inline
                                label="Belum Selesai"
                                name="group1"
                                type={status}
                                id={`inline-${status}-2`} 
                                value={status} onChange={(event)=>{
                                    setStatus(event.target.value)
                                  }}
                              />
                            </div>
                          ))}
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