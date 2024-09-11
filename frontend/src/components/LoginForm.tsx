import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {LoginInterface} from "../interface/ILogin"
import { GetMembers } from '../service/https';


const LoginForm: React.FC = () => { 
  const [username,setUsername] = useState<string>("")
  const [password,setPassword] = useState<string>("")
  
  const handleSubmit = async  ()=>{
    const values:LoginInterface = {
      UserName: username,
      Password: password,
    } 
  

  };

  return (
    <div className="h-full flex mt-20 mb-20 p-15">
      <div className="w-1/5 text-center"></div>
      <div className="w-3/5 text-center h-auto">
        <div className="text-lime-200">
          <div className="text-5xl font-extrabold mb-10">Login</div>
          <div className="text-5xl font-extrabold mb-20 p-15">
            "Unlock your potential."
          </div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <div className="mt-2 text-left "> 
                <div className='text-sm mb-2 text-white'>Enter your Username</div>
                <input id="username" name="username" type="username" required autoComplete="username" className="block w-full rounded-full  text-center bg-password py-3 text-white shadow-sm  "
                placeholder='Username'  onChange= {(e)=>{setUsername(e.target.value)}} />
              </div>
            </div>
          <div>
              <div className="mt-2 text-left">
                <div className='text-sm mb-2 text-white'>Enter your Password</div>
                <input id="password" name="password" type="password" required autoComplete="password" className="block w-full rounded-full  text-center  bg-password py-3 text-white shadow-sm  "
                placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
            </div>

            <div>
              <Link to="/login">
                <button
                className="w-4/5 mb-4 text-2xl mt-3 rounded-full bg-lime-400 text-black hover:bg-black hover:text-white py-2 transition-colors duration-300"
                type="button" onClick={handleSubmit}>Login 
                </button>
              </Link>

              <div className='mt-5 text-white'>Don't have an account? <Link to="/Register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up</Link></div>
            </div>
          </form>

          
        </div>
        
      </div>
    </div>
  );
};


export default LoginForm;