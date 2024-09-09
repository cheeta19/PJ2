import React from 'react';
import { MembersInterface } from '../interface/IMembers';
import { CreateMember } from '../service/https';
// import  input  from '../components/input';

const RegisterFrom: React.FC = () => {


  const [member, setMember] = React.useState<Partial<MembersInterface>>({
  });

  const handleInputChange = (
    event: React.ChangeEvent<{ id?: string; value: any }>
  ) => {
    const id = event.target.id as keyof typeof RegisterFrom;

    const { value } = event.target;

    setMember({ ...member, [id]: value });
  };

  async function submit() {
    let data = {
      FirstName: member.FirstName,
      LastName: member.LastName,
      Email: member.Email,
      Password: member.Password,
      UserName: member.UserName,
      PhoneNumber: member.PhoneNumber,
      GenderID: 1,
      
    };

    let res = await CreateMember(data);

    if (res) {
      console.log(data)
    } else {
      return false
    }
  }


  return (
    <div className="h-full items-center flex mt-20 mb-20 p-15 ">
      <div className="w-1/5 text-center"></div>
      <div className="w-3/5 text-center h-auto">
        <div className="text-lime-200">
          <div className="text-5xl font-extrabold mb-10">Sign Up</div>
          <div className="text-5xl font-extrabold mb-20 p-15">
            "Join us and start your fitness journey today!"
          </div>
        </div>

        <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <div className="mt-2">
                <div className='text-xs text-left mb-2'>Enter your Username</div>
                <input id="UserName" name="Username" type="Username" value={member.UserName} onChange={handleInputChange} required autoComplete="Username" className="block w-full rounded-full  text-center bg-password py-3 text-white shadow-sm  "
                  placeholder='Enter username' />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <div className='text-xs text-left mb-2'>Enter Firstname</div>
                <input id="FirstName" name="Firstname" type="Firstname" value={member.FirstName} onChange={handleInputChange} required autoComplete="Firstname" className="block w-full rounded-full  text-center  bg-password py-3 text-white shadow-sm  "
                  placeholder='Enter firstname' />
              </div>
            </div>
            <div> 
              <div className="mt-2"> 
                <div className='text-xs text-left mb-2'>Enter Lastname</div>
                <input id="LastName" name="Lastname" type="Lastname" value={member.LastName} onChange={handleInputChange}required autoComplete="Lastname" className="block w-full rounded-full  text-center  bg-password py-3 text-white shadow-sm  "
                  placeholder='Enter lastname' />
              </div>
            </div>
            <div>
              {/* kjjihiih */}
              <div className="mt-2">
                <div className='text-xs text-left mb-2'>Enter your Email</div>
                <input id="Email" name="Email" type="Email" value={member.Email} onChange={handleInputChange} required autoComplete="Email" className="block w-full rounded-full  text-center  bg-password py-3 text-white shadow-sm  "
                  placeholder='Enter email' />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <div className='text-xs text-left mb-2'>Enter Password</div>
                <input id="Password" name="password" type="password" value={member.Password} onChange={handleInputChange} required autoComplete="password" className="block w-full rounded-full  text-center  bg-password py-3 text-white shadow-sm  "
                  placeholder='Enter password' />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <div className='text-xs text-left mb-2'>Enter Phone number</div>
                <input id="PhoneNumber" name="PhoneNumber" type="PhoneNumber" value={member.PhoneNumber} onChange={handleInputChange} required autoComplete="PhoneNumber" className="block w-full rounded-full  text-center  bg-password py-3 text-white shadow-sm  "
                  placeholder='Enter phonenumber' />
              </div>
            </div>


            <form className="max-w-sm mx-auto">
              <label htmlFor="underline_select" className="sr-only">Underline select</label>
              <select id="underline_select" value={member.GenderID} className="block w-full rounded-full  text-center  bg-password py-3 text-white ">
                <option selected>Choose a gender</option>
                <option value="US">Female</option>
                <option value="CA">Male</option>
              </select>
            </form>

            <div>
              <button
                className="w-4/5 mb-4 text-2xl mt-3 text-center rounded-full bg-lime-400 text-black hover:bg-lime-400 bg-opacity-40 hover:text-black py-2 transition-colors duration-300"
                type="button" onClick={submit}>
                Sign Up
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default RegisterFrom;


