import React from 'react';
// styles
import styles from './Signin.module.css'
const Signin = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formcontainer}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, delectus.</p>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
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