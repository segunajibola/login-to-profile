import React from 'react';
// import nameValue from './Login';

const Profile = () => {

  const nameFromLocalStorage = JSON.parse( localStorage.getItem("fullname"))

  return (
    <>
        <div className='w-full h-screen pt-24 px-5'>
            <p className='text-gray-500 text-2xl'>
                Welcome to your Profile
            </p>
        </div>
    </>
  )
}

export default Profile