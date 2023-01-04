import React ,{useState} from 'react';
import './LoginStyle.css';
import { useNavigate} from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {LOGIN_USER} from '../graphql/mutation/loginUserMutation'
function Login() {
	const navigate = useNavigate();
	const [loginData, setData] = useState("");


	const [signin, {error, loading, data}] = useMutation(LOGIN_USER)
	if (loading) return <h1>Loading</h1>
	if (data){
		localStorage.setItem("token", data.user.token);
		navigate("/submitTicket");
	}
	

	const handleSubmit = (event) =>{
		event.preventDefault();
		// console.log(loginData);
		signin({ variables:{
			email: loginData
		}})
	}
	
  return (
   <>
 <main className="main">
	<div className="container">
		<section className="wrapper">
		{
			error && <div className="errormessage">{error.message}</div>
		}
			<div className="heading">
				<h1 className="text text-large">Sign In</h1>
				<p className="text text-normal">New user? <span><a href="#" className="text text-links">Create an account</a></span>
				</p>
			</div>
			<form name="signin" className="form" onSubmit={(event)=>handleSubmit(event)}>
				<div className="input-control">
					<label htmlFor="email" className="input-label" hidden>Email Address</label>
					<input type="email" name="email"
					value={loginData}
					onChange= {event=>setData(event.target.value)}
					id="email" className="input-field" placeholder="Email Address"/>
				</div>
				
				<div className="input-control">
					
				
					<button className="btn-primary"type="submit">Log In</button>
				
				</div>
			</form>
			<div className="striped">
				<span className="striped-line"></span>
				<span className="striped-text">Or</span>
				<span className="striped-line"></span>
			</div>
			<div className="method">
				<div className="method-control">
					<a href="#" className="method-action">
						<span className="link">Sign in with Google</span>
					</a>
				</div>
				<div className="method-control">
					<a href="#" className="method-action">
						<span  className="link">Sign in with Facebook</span>
					</a>
				</div>
				<div className="method-control">
					<a href="#" className="method-action">
						<span  className="link">Sign in with Apple</span>
					</a>
				</div>
			</div>
			
		</section>
	</div>
</main>

   </>
  )
}

export default Login