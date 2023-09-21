import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {
    const navigate = useNavigate();

    const { id } = useParams()

    const [stock_name, setStock_Name] = useState("")
    const [stock_quantity, setStock_Quantity] = useState("")
    const [validationError,setValidationError] = useState({})

    useEffect(()=>{
        fetchStocks()
    },[])
    
    const fetchStocks = async () => {
    await axios.get(`http://localhost:8000/api/stocks/${id}`).then(({data})=>{
        const { stock_name, stock_quantity } = data.stock
        setStock_Name(stock_name)
        setStock_Quantity(stock_quantity)
    }).catch(({response:{data}})=>{
        Swal.fire({
        text:data.message,
        icon:"error"
        })
    })
    }

      const updateStock = async (e) => {
        e.preventDefault();
    
        const formData = new FormData()
        formData.append('_method', 'PATCH');
        formData.append('stock_name', stock_name)
        formData.append('stock_quantity', stock_quantity)
        
    
        await axios.post(`http://localhost:8000/api/stocks/${id}`, formData).then(({data})=>{
          Swal.fire({
            icon:"success",
            text:data.message
          })
          navigate("/adminpage")
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
              <h4 className="card-title">Update Stock</h4>
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
                <Form onSubmit={updateStock}>
                <Row> 
                    <h5>{stock_name}</h5>
                  {/* <Col>
                    <Form.Group controlId="stock_name">
                    <Form.Label>Nama Stock</Form.Label>
                        <Form.Control type="text" value={stock_name} onChange={(event)=>{
                          setStock_Name(event.target.value)
                        }}/>
                    </Form.Group>
                  </Col>   */}
              </Row>
                <Row> 
                  <Col>
                    <Form.Group controlId="stock_quantity">
                        <Form.Label>Jumlah Stock</Form.Label>
                        <Form.Control type="number" value={stock_quantity} onChange={(event)=>{
                          setStock_Quantity(event.target.value)
                        }}/>
                    </Form.Group>
                  </Col>  
              </Row>
                  <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                    Update
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