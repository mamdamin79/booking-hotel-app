import React,{ useState } from 'react';
// styles
import styles from './Signin.module.css'
// api
import { signinUser } from '../../assets/api/fetchdata'; 
const Signin = () => {
    const [info, setInfo] = useState({
        email: '',
        password: ''
    })
    const submitHandler = async(e) => {
        e.preventDefault();
        await signinUser(info);
    }
    return (
        <div className={styles.container}>
            <div className={styles.formcontainer}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, delectus.</p>
                <form onSubmit={submitHandler}>
                    <input onChange={(e)=>setInfo({...info,email: e.target.value})} type="email" placeholder="Email" />
                    <input onChange={(e)=>setInfo({...info,email: e.target.value})} type="password" placeholder="Password" />
                    <div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">Remember me</label>
                        </div>
                        <a href="#">forgot password</a>
                    </div>
                    <button>Sign in</button>
                </form>
            </div>
        </div>
    );
}
 
export default Signin;