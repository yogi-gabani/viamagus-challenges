import {useState} from 'react';
import validator from 'validator';
import BackgroundImage from 'assets/Green-Background.png';
import AmazonImage from 'assets/amazon.jpg';
import TreeImage from 'assets/Tree.png';
import GoogleLogo from 'assets/Google.png';
import FacebookLogo from 'assets/Facebook.png';
import styles from 'components/Login/login.module.css'

const Login = () => {
  const initialError = {
    email: "",
    password: ""
  }
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<LoginError>(initialError);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(initialError);
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }

  const handleSignin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email) {
      setError({ ...error, email: 'The email field is required'})
    } else if (!validator.isEmail(email)) {
      setError({ ...error, email: 'The email should be in correct format'})
    } else if (!password) {
      setError({ ...error, password: 'The password field is required'})
    }
  }

  return (
    <div className={styles.container}>
      <img src={BackgroundImage} alt="Green Tree Background" />
      <div className={styles.box}>
        <div className={styles.heading}>
          <img src={AmazonImage} alt="amazon" />
        </div>
        <div className={styles.form}>
          <h5 className={styles.loginTitle}>Login</h5>
          <img className={styles.treeImg} src={TreeImage} alt="Tree Logo" />
          <div className={styles.formGroup}>
            <input placeholder='Email' value={email} onChange={handleInput} name='email' className={styles.input} type="email" />
            {error.email && <><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs></defs><g transform="translate(-1958 -628)"><circle cx="8" cy="8" r="8" fill='#b9140e' transform="translate(1958 628)"/><path fill='none' stroke='white' d="M1942,636h8" transform="translate(20)"/></g></svg>
            <p className={styles.error}>{error.email}</p></>}
          </div>
          <div className={styles.formGroup}>
            <input placeholder='Password' value={password} onChange={handleInput} name='password' className={`${styles.input} ${styles.password}`} type="password" />
            {error.password && <><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs></defs><g transform="translate(-1958 -628)"><circle cx="8" cy="8" r="8" fill='#b9140e' transform="translate(1958 628)"/><path fill='none' stroke='white' d="M1942,636h8" transform="translate(20)"/></g></svg>
            <p className={styles.error}>{error.password}</p></>}
          </div>
          <button onClick={handleSignin} className={styles.btnSignin}>Sign In</button>
          <div className={styles.forgetPass}>
            <button>Forget Password?</button>
            <button className={styles.newUser}>New User? Sign Up</button>
          </div>
          <p className={styles.or}>or</p>
          <div className={styles.btnLogo}>
            <img className={styles.linkLogo} height={36} width={36} src={GoogleLogo} alt="google-logo" />
            <button>CONTINUE WITH GOOGLE</button>
          </div>
          <div className={styles.btnLogo} style={{marginTop: -8}}>
            <img className={styles.linkLogo} height={36} width={36} src={FacebookLogo} alt="facebook-logo" />
            <button>CONTINUE WITH FACEBOOK</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;