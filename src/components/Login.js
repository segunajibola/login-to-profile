import { useState, React } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const initialValues = {username: "", email: "", password: ""}
    const [formValues, setFormValues] = useState(initialValues)

    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    } 
    

    return (
    <>
      <div className='w-full pt-24 mx-auto px-6 text-center'>
        <h1 className='text-primary mt-8 md:mt-0 font-bold text-3xl'>
          Welcome to E-Gift
        </h1>
        <pre>{JSON.stringyfy(formValues(formValues, undefined, 2))}</pre>
        <p className='text-inactive mt-3'>Enter details to login</p>
            <form method='POST' action="" onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full mx-auto my-5'>
                <label className="text-left my-2">Full Name</label>
                <input 
                    className='bg-[#ccd6f6] p-2' 
                    type="text" id="fullname" 
                    placeholder='Full Name' 
                    name='username' 
                    value={ formValues.username }
                    onChange={handleChange} />
                <label className="text-left my-2">E-mail</label>
                <input 
                    className='mb-2 p-2 bg-[#ccd6f6]' 
                    type="email" 
                    placeholder='Email' 
                    name='email'
                    value={ formValues.email }
                    onChange={handleChange} />
                <label className="text-left my-2">Password</label>
                <input 
                    className='mb-2 p-2 bg-[#ccd6f6]' 
                    type="password" 
                    placeholder='password' 
                    name='password'
                    value={ formValues.password }
                    onChange={handleChange} />
                <Link to='/profile' className='mt-3'>
                    <submit  className='border-2 w-20 border-black hover:bg-gray-700 hover:text-white hover:border-gray-600 py-2 px-4 rounded-lg my-8 mx-auto flex items-center'>Login</submit>
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
