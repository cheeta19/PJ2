
import React from 'react';
import Header from '../components/Header.tsx';
import LoginForm from '../components/LoginForm.tsx';
import SideText from '../components/SideText';

const Login: React.FC = () => {
  return (
    <div className='text-white border min-h-screen w-full justify-center bg-cover' style={{ backgroundImage: "url('../src/assets/bg.jpg')" }}>
      <div className="container-auto ">
        <div className="row ">
          {/* Header */}
          <div className="">
            <Header />
          </div  >
          <div className='items-center'><LoginForm /></div>
          

          {/* Side Text */}
          <div className='items-end'><SideText /></div>
        </div>
      </div>
    </div>
    
  );
};

export default Login;