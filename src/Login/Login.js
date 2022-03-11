import { Form, Button } from 'react-bootstrap';
import './Login.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { actionLogin } from '../Action/ActionLogin'
import { useDispatch, useSelector } from 'react-redux';
import LoginAction from '../Redux/Reducer/LoginAction';
import { useNavigate } from 'react-router-dom';
import Loading from '../Component/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const { token } = useSelector((state) => state.Login);
    const navigate = useNavigate();
    const [buttonDisable, setButtonDisable] = useState(false);

    const handleLogin = async () => {
        try {
            setLoading(true)
            const param = {
                username: email,
                password: password
            }
            let data = await actionLogin(param);
            if (data?.status == 200) {
                dispatch(LoginAction.SET_TOKEN(data?.data?.data?.token));
                setLoading(false);
                navigate("/Home")
            }
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log('errorrr ', err);
        }
    }

    useEffect(() => {
        if (password.length > 0 && email.length > 0) {
            setButtonDisable(true);
        }
    }, [password, email]);

    return (
        <div className="Login">
            <header className="Login-header">
                <img src={require('../asset/images/header-logo.png')} className="Login-logo" />
            </header>
            <div className='Login-container'>
                <div className='Login-form'>
                    {loading && <Loading />}
                   <label className='Login-label-login'>Login</label>
                      <label className='label-text-user' data-cy='form-text-email'>
                        Email</label>
                    <input type="email" data-cy='form-input-email' className='form-text-input-user' value={email} onInput={e => setEmail(e.target.value)} />
                    <label className='label-text-password'>
                        Password</label>
                    <input type="password" className='form-text-input-password' value={password} onInput={e => setPassword(e.target.value)} />

                    <button type="submit" disabled={!buttonDisable} className='form-button' data-cy='form-button-login' onClick={handleLogin}>Login</button>

                    
                    <label className='Login-lewati' data-cy='form-button-skip'>Lewati Login</label>

                    {/* <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form> */}
                </div>
                <img src={require('../asset/images/content-logo.png')} className="Login-img-content" />
            </div>

        </div>
    );


}
