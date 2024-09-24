import React, { useState } from "react";
import { MembersInterface } from "../../interface/IMembers";
import { CreateMember } from "../../service/https";

const CreateForm: React.FC = () => {
    const [formData, setFormData] = useState<MembersInterface>({
        FirstName: "",
        LastName: "",
        Email: "",
        UserName: "",
        PhoneNumber: "",
        GenderID: undefined,
        Password: "",
        Age: undefined,
    });

    const handleSubmit = async () => {
        try {
            console.log("Form Data:", formData);
            let res = await CreateMember(formData);
            console.log(res);

            if (res) {
                alert('Your information has been submitted successfully');
            } else if (res.errors) {
                console.log('Errors:', res.errors);
                alert(`Submission failed: ${res.errors.join(', ')}`);
            } else {
                console.log('Unknown error occurred');
                alert('Submission failed, please try again.');
            }
        } catch (error) {
            console.error("Error saving data:", error);
            alert('Error saving data');
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        field: keyof MembersInterface
    ) => {
        setFormData({
            ...formData,
            [field]: field === 'GenderID' ? Number(e.target.value) : e.target.value,
        });
    };

    return (
        <div className="p-10 w-full mx-auto rounded-lg ">
                        <div className="grid grid-cols-2 ">
                {/* ฝั่งซ้าย */}
                <div >
                    <div className=" w-1/2 ">
                        <label htmlFor="FirstName" className="block text-secondary ">First Name</label>
                        <input
                            id="FirstName"
                            name="FirstName"
                            type="text"
                            placeholder="Firstname"
                            value={formData.FirstName}
                            onChange={(e) => handleInputChange(e, "FirstName")}
                            className=" w-full p-2 rounded bg-gray-700 text-white "
                        />
                    </div>

                    <div>
                        <label htmlFor="Email" className="block text-secondary mt-4">Email</label>
                        <input
                            id="Email"
                            name="Email"
                            type="email"
                            placeholder="Enter email"
                            value={formData.Email}
                            onChange={(e) => handleInputChange(e, "Email")}
                            className="w-1/2 p-2 rounded bg-gray-700 text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="UserName" className="block text-secondary mt-4">Username</label>
                        <input
                            id="UserName"
                            name="UserName"
                            type="text"
                            placeholder="Enter username"
                            value={formData.UserName}
                            onChange={(e) => handleInputChange(e, "UserName")}
                            className="w-1/2 p-2 rounded bg-gray-700 text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="Age" className="block text-secondary mt-4">Age</label>
                        <input
                            id="Age"
                            name="Age"
                            type="number"
                            placeholder="Enter your age"
                            value={formData.Age}
                            onChange={(e) => handleInputChange(e, "Age")}
                            className="w-1/2 p-2 rounded bg-gray-700 text-white"
                        />

                    </div>
                    <div>
                        <label htmlFor="TypeMember" className="block text-secondary mt-4">Type Member</label>
                        <select
                            id="TypeMember"
                            value={formData.GenderID}
                            onChange={(e) => handleInputChange(e, "GenderID")}
                            className="w-1/2 p-2 rounded bg-gray-700 text-white"
                        >
                            <option value=""></option>
                            <option value={1}>Female</option>
                            <option value={2}>Male</option>
                        </select>
                    </div>
                </div>

                {/* ฝั่งขวา */}
                <div>
                    <div>
                        <label htmlFor="LastName" className="block text-secondary">Last Name</label>
                        <input
                            id="LastName"
                            name="LastName"
                            type="text"
                            placeholder="Lastname"
                            value={formData.LastName}
                            onChange={(e) => handleInputChange(e, "LastName")}
                            className="w-1/2 p-2 rounded bg-gray-700 text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="Gender" className="block text-secondary mt-4">Gender</label>
                        <select
                            id="Gender"
                            value={formData.GenderID}
                            onChange={(e) => handleInputChange(e, "GenderID")}
                            className="w-1/2 p-2 rounded bg-gray-700 text-white"
                        >
                            <option value="">Choose a gender</option>
                            <option value={1}>Female</option>
                            <option value={2}>Male</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="Password" className="block text-secondary mt-4">Password</label>
                        <input
                            id="Password"
                            name="Password"
                            type="password"
                            placeholder="Enter password"
                            value={formData.Password}
                            onChange={(e) => handleInputChange(e, "Password")}
                            className="w-1/2 p-2 rounded bg-gray-700 text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="PhoneNumber" className="block text-secondary mt-4">Phone Number</label>
                        <input
                            id="PhoneNumber"
                            name="PhoneNumber"
                            type="text"
                            placeholder="Enter phone number"
                            value={formData.PhoneNumber}
                            onChange={(e) => handleInputChange(e, "PhoneNumber")}
                            className="w-1/2 p-2 rounded bg-gray-700 text-white"
                        />
                    </div>



                    <div>
                        <label htmlFor="Status" className="block text-secondary mt-4">Status</label>
                        <select
                            id="Status"
                            value={formData.GenderID}
                            onChange={(e) => handleInputChange(e, "GenderID")}
                            className="w-1/2 p-2 rounded bg-gray-700 text-white"
                        >
                            <option value=""></option>
                            <option value={1}>Female</option>
                            <option value={2}>Male</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-3  mt-8 ">
                <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                <button className="bg-green text-black px-4 py-2 rounded" onClick={handleSubmit}>Update</button>
            </div>
        </div>
    );

};

export default CreateForm;
