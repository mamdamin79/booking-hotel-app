import React, { useState } from 'react';
// styles
import styles from './Register.module.css'
// api
import { registerUser } from '../../assets/api/fetchdata';
import { Link, useHistory } from 'react-router-dom';
// icons
import { BiRightArrow, BiRightArrowAlt } from "react-icons/bi";

const Register = () => {
    const history = useHistory();
    const [response,setResponse] = useState(false);
    const [info, setInfo] = useState({
        name: '',
        password: "",
        email: ""
    })
    const submitHandler = async(e) => {
        e.preventDefault();
        const response = await registerUser(info)
        setResponse(response)
    }
    return (
        <>
            {response.success ? 
                 <div className={styles.success}>
                    <p>{response.message}</p>
                    <Link to="/signin"><BiRightArrowAlt/> sign-in to your account</Link>
                </div>
                : <div className={styles.container}>
                    <div className={styles.formcontainer}>
                        <p>enter your information to be one of our user</p>
                        <form onSubmit={submitHandler}>
                            <input onChange={(e)=>{setInfo({...info, name:e.target.value})}} type="text" placeholder="user name"/>
                            <input onChange={(e)=>{setInfo({...info, email:e.target.value})}} type="email" placeholder="Email" />
                            <input onChange={(e)=>{setInfo({...info, password:e.target.value})}} type="password" placeholder="Password" />
                            {info.password.length < 8 && <p className={styles.errorMessage}>password must be at least 8 characters</p>}
                            <div>
                                <div>
                                    <input type="checkbox" />
                                    <label htmlFor="">Remember me</label>
                                </div>
                            </div>
                            <button>Sign in</button>
                        </form>
                    </div>
                </div>}
        </>
    );
}
 
export default Register;