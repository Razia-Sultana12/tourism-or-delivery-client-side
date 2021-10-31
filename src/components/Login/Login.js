
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,sendEmailVerification, sendPasswordResetEmail,updateProfile} from "firebase/auth";
import { useState } from 'react';
import initializationAuthentication from "../../Firebase/firebase.init";
import useAuth from "../../hooks/useAuth";



initializationAuthentication();

const Login = ()=> {
  const [name,setName] =useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const [isLogin,setIsLogin]=useState(false);
  
  
  const auth = getAuth();
  const {logOut,signInUsingGoogle}=useAuth();



const toggleLogin=e=>{
  setIsLogin(e.target.checked);
}
const handleNameChange=e=>{
  setName(e.target.value); 
}
const handleEmailChange=e=>{
  setEmail(e.target.value);
}
const handlePasswordChange=e=>{
  setPassword(e.target.value);
}

const handleRegistration=e=>{
  e.preventDefault();
  console.log(email,password);
  if(!/^(?=.*[0-9])||(?=.*[!@#$%^&*])||[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
    setError('Your password is invalid,Please try again!');
    return;
  }
  isLogin?processLogin(email,password):registerNewUser(email,password)
  
}
const processLogin =(email,password)=>{
  signInWithEmailAndPassword(auth,email,password)
  .then(result=>{
    const user= result.user;
    console.log(user);
    setError('');
  })
  .catch(error=>{
    setError(error.message);
  })
}
const registerNewUser =(email,password)=>{
  createUserWithEmailAndPassword(auth,email,password)
  .then(result=>{
  const user = result.user;
  console.log(user);
  setError('');
  verifyEmail();
  setUserName();
})
.catch(error=>{
  setError(error.message);
})
}
const setUserName =()=>{
  updateProfile(auth.currentUser, { displayName:name})
  .then(result=>{ })
}

const verifyEmail=()=>{
sendEmailVerification(auth.currentUser)
  .then(result => {
    console.log(result);
  })
};
const handleResetPassword=() =>{
  sendPasswordResetEmail(auth,email)
  .then(result=>{ })
}


  return (
    <div>
      <form onSubmit={handleRegistration}>
      <h3 className="text-primary mx-5">Please {isLogin? 'Login': 'Register'}</h3>
      { !isLogin && <div className="mb-3 mx-5">
    <label for="exampleInputEmail1"  className="form-label">Name</label>
    <input type="text" onBlur={handleNameChange} placeholder="your name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    </div>}
    <div className="mb-3 mx-5">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3 mx-5">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required/>
  </div>
  <div className="mb-3 mx-5 text-danger">{error}</div>
  <div className="mb-3 mx-5 form-check">
    <input type="checkbox" onChange={toggleLogin} className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Already Registered?</label>
  </div>
  <button type="submit" className="btn btn-primary ms-5 px-3">{isLogin? 'Login': 'Register'}</button>
  <button type="button" onClick={handleResetPassword} class="btn btn-secondary ms-3 ">Reset Password</button>

 </form>
 
    
       
     
    </div>
  );
}

export default Login;
