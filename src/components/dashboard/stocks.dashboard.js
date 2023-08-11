import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slide from "react-reveal";

class Stock extends Component {
  render() {
    return (
      <>
      <section id="stock">
        <Slide left duration={1300}>
          <Container>
          <div className="container mt-5">
          <div className="card card-body">
            <div className="three columns main-col">
              <h1>
                <span>Persediaan</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                <p>DOC Ayam Sentul : 2000 Ekor</p>
                <p>DOD Itik Rambon : 700 Ekor</p>
                </div>
              </div>
            </div>
            </div>
            </div>
          </Container>
          <Container fluid='md'>

        <div className="container mt-5" >
                <div className="card card-body">
                    <div className="table-responsive">
                    <h1>Waiting List</h1>
                        <table className="table table-bordered mb-0 text-center">
                        <thead>
            <tr>
              <th>No</th>
              <th>Tanggal</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Jenis Pembelian</th>
              <th>Total Pembelian</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
                        </table>
        </div>
        </div>
        </div>
        </Container>

        </Slide>
      </section>
      </>
      
    );
  }
}

export default Stock;
