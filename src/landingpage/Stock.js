import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { useEffect, useState } from "react";

function Stocks() {
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        fetchOrders() 
    },[])

    const fetchOrders = async () => {
        await axios.get(`http://localhost:8000/api/orders`).then(({data})=>{
            setOrders(data)
        })
    }
    return (
      <>
      <section className="stock" id="stock">
          <Container>
          <div className="container mt-5">
          <div className="card card-body">
            <Row className="justify-content-md-center">
              <Col xs lg="4">
                  <h1>
                    <span>Persediaan</span>
                  </h1>
              </Col>
              <Col>
              <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                <h5>DOC Ayam Sentul : 2000 Ekor</h5>
                <h5>DOD Itik Rambon : 700 Ekor</h5>
                </div>
              </div>
            </div>
              </Col>
            </Row>
            </div>
              </div>
            
          </Container>
        <Container fluid='md'>
        <div className="container mt-5" >
                <div className="card card-body">
          <Row>
            <Col>
            <h1>
              <span>Waiting List</span>
            </h1>
            </Col>
            </Row>
            <Row>
              <br />
            </Row>
            <Row>
              <Col>
              <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Pembeli</th>
                                    <th>Jenis Pembelian</th>
                                    <th>Total Ekor</th>
                                  
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.length > 0 && (
                                        orders.map((row, index)=>(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{row.name}</td>
                                                <td>{row.variety}</td>
                                                <td>{row.quantity}</td>
                                                
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </Col>
          </Row>
        
          
        </div>
        </div>
        </Container>
      </section>
      </>
      
    );
  }
export default Stocks;

