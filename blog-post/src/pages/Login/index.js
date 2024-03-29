import React from 'react'
import { RegisterBg } from '../../assets/';
import { Button, Gap, Input, Link } from '../../components/'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="imageBg" />
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={20} />
                <Button title="Login" onClick={() => history.push('/')} />
                <Gap height={185} />
                <Link title="Belum punya akun,Silahkan Daftar" onClick={() => history.push('/register')} />
            </div>
        </div>
    )
}

export default Login