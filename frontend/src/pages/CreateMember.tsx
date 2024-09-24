import React from "react";
import Nav from "../components/manu/Nav";
import SideBar from "../components/manu/Sidebar";
import CreateForm from "../components/Create/CreateForm";


const CreateMember: React.FC = () => {
   

    return (
        <div className="flex">
            <SideBar />
            <div className="bg-black w-full">
                <Nav title="" />
                <div>
                    <div className=" navbar bg-black h-[76px] flex justify-between items-center px-4 py-2">
                        <h1 className="text-3xl text-green1 ml-14 mt-2 text-secondary">Create Member</h1>
                    </div>

                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="bg-gray-800 mx-20 mt-5 w-full rounded-3xl overflow-auto scrollable-div flex justify-center bg-sidebar backdrop-blur-sm">
                        {/* <div className="flex flex-row items-start m-10 text-secondary "> */}
                             <CreateForm />
                        {/* </div> */}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CreateMember;
