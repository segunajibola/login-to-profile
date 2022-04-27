import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {

    let name = document.getElementById("name")

    let handleform = () => {
        // nameValue = name.value
        // localStorage.setItem("fullname", JSON.stringify(nameValue))
    }
    

    return (
    <>
      <div className='w-full pt-24 mx-auto px-6 text-center'>
        <h1 className='text-primary mt-8 md:mt-0 font-bold text-3xl'>
          Welcome to E-Gift.
        </h1>
        <p className='text-inactive mt-3'>Enter details to login</p>
            <form method='POST' action="" className='flex flex-col max-w-[600px] w-full mx-auto my-5'>
                <label className="text-left my-2">Full Name</label>
                <input className='bg-[#ccd6f6] p-2' type="text" id="name" placeholder='Full Name' name='name' />
                <label className="text-left my-2">E-mail</label>
                <input className='mb-2 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <label className="text-left my-2">Password</label>
                <input className='mb-2 p-2 bg-[#ccd6f6]' type="password" placeholder='password' name='email' />
                <Link to='/profile' onClick={handleform} className='mt-3'>
                    <button  className='border-2 border-black hover:bg-gray-700 hover:text-white hover:border-gray-600 py-2 px-4 rounded-lg my-8 mx-auto flex items-center'>Login</button>
                </Link>
            </form>
          <Link to='/' className='mt-3 text-indigo-600 text-sm'>
            Forgot Password?
          </Link>
        </div>
    </>
  );
};

export default Login;
