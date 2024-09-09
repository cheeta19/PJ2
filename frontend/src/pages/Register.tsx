import React from 'react';
import Header from '../components/Header.tsx';
import RegisterFrom from '../components/RegisterForm.tsx';
import SideText from '../components/SideText';
const Register = () => {
  
    return(
      <div className='text-white border h-screen w-full justify-center bg-cover' style={{ backgroundImage: "url('../src/assets/bg.jpg')" }}>
      <div >
        <div className="row ">
          {/* Header */}
          <div className="">
            <Header />
          </div >
          <div className='items-center'><RegisterFrom/>
          </div>
          <div className='items-end '><SideText /></div>

          {/* Side Text */}
          
        </div>
      </div>
    </div>
    )
}
export default Register;