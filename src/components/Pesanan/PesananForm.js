import React from 'react'
import 'bootstrap'


function PesananForm() {
    return (
        <div className='pesanan'>
            <form>
                <h3>Form Pesanan</h3>
                <div>
                    <label htmlFor="nama">Nama</label>
                    <input type="text" placeholder='Masukan Nama' className='form-control'></input>
                </div>
                <div>
                    <label htmlFor="alamat">Alamat</label>
                    <input type="text" className='form-control'></input>
                </div>

                <div>
                    <label htmlFor="jenis">Jenis Pembelian</label>
                    <select type="checkbox"  className='form-control'> 
                    <option>DOC Ayam Sentul</option>
					<option>DOD Ayam Itik Rambon</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="jumlah">Jumlah Ekor</label>
                    <input type="text" className='form-control'></input>
                </div>
                <div>
                    <label htmlFor="tujuanbeli">Tujuan Pembelian</label>
                    <input type="text" className='form-control'> </input>
                </div>
                <div>
                    <label htmlFor="tanggal">Tanggal</label>
                    <input type="date" className='form-control'></input>
                </div>
                <div className="form-btn">
				<button class="submit-btn">Submit</button>
				</div>

            </form>

        </div>
    )
}
export default PesananForm;