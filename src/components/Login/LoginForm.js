import './LoginForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function LoginForm() {
    return(
    <div className='wrapper  d-flex align-items-center justify-content-center w-100'>
        <div className='login'>
            <h2 className='mb-3'>LOGIN</h2>
            <form className='needs-validation'>
            <div className='form-group was-validated mb-2'>
                <label htmlFor='username' className='form-label'>Username</label>
                <input type="text" className='form-control' required></input>
                <div classname="invalid-feedback">
                    Masukan email atau username
                </div>
            </div>
            <div className='form-group was-validated mb-2'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input type="password" className='form-control' required></input>
                <div classname="invalid-feedback">
                    Masukan password
                </div>
            </div>
            <div className='form-group form-check mb-2'>
                <input type="checkbox" className='form-check-input'></input> 
                <label htmlFor='check' className='form-check-label'>Remember me</label>
                 
            </div>
            <button type='submit' className='btn btn-success block w-100 mt-2'>LOGIN</button>
            </form>
        </div>
        </div>
    )
}

export default LoginForm;