import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { useEffect, useState } from "react";

function Stocks() {
  const [stocks, setStocks] = useState({});


    useEffect(()=>{
        fetchStocks() 
    },[])

    const fetchStocks = async () => {
        await axios.get(`http://localhost:8000/api/stocks`).then(({data})=>{
            setStocks(data)
        })
    }
    
    
    const [actions, setActions] = useState([])

    useEffect(()=>{
        fetchActions() 
    },[])

    const fetchActions = async () => {
        await axios.get(`http://localhost:8000/api/actions`).then(({data})=>{
            setActions(data)
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
                <div>  {
                                    stocks.length > 0 && (
                                        stocks.map((row, index)=>(
                                            <tr key={index}>
                                              <li>{row.stock_name} :   <b>{row.stock_quantity}</b> ekor
                                              </li>
                                              
                                                
                                                
                                            </tr>
                                        ))
                                    )
                                }</div>
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
                                    actions.length > 0 && (
                                        actions.map((row, index)=>(
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

