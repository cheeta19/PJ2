import React, { useState } from "react";
import { MembersInterface } from "../../interface/IMembers"; // Importing interface
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
            let res = await CreateMember(formData); // Sending formData to the API
            console.log(res);

            if (res) {
                alert('Your information has been submitted successfully');
                // Reset form or navigate user here if needed
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
        <div className="mt-2">
            <div className="w-full text-3xl text-green1 ml-14 mt-2 text-secondary items-end "> Name
                <div className="text-xs text-left mb-2 xl:text-lg text-white">Firstname</div>
                <input
                    id="Firstname"
                    name="Firstname"
                    type="text"
                    required
                    autoComplete="Firstname"
                    className="text-xl block w-full rounded-full text-center bg-password py-3 text-white shadow-sm"
                    placeholder="Enter firstname"
                    value={formData.FirstName}
                    onChange={(e) => handleInputChange(e, "FirstName")}
                />

                <div className="mt-2">
                    <div className="text-xs text-left mb-2 xl:text-lg text-white">Lastname</div>
                    <input
                        id="Lastname"
                        name="Lastname"
                        type="text"
                        required
                        autoComplete="Lastname"
                        className="text-xl block w-full rounded-full text-center bg-password py-3 text-white shadow-sm"
                        placeholder="Enter lastname"
                        value={formData.LastName}
                        onChange={(e) => handleInputChange(e, "LastName")}
                    />
                </div>
            </div>
            

            <div className="mt-2">
                <div className="text-xs text-left mb-2 xl:text-lg text-white">Age</div>
                <input
                    id="Age"
                    name="Age"
                    type="text"
                    required
                    autoComplete="Age"
                    className="block w-full rounded-full text-center bg-password py-3 text-white shadow-sm"
                    placeholder="Enter your age"
                    value={formData.Age}
                    onChange={(e) => handleInputChange(e, "Age")}
                />
            </div>

            <div className="mt-2">
                <div className="text-xs text-left mb-2 xl:text-lg text-white">Gender</div>
                <select
                    id="gender"
                    className="block w-full rounded-full text-center bg-password py-3 text-white  mt-2"
                    value={formData.GenderID}
                    onChange={(e) => handleInputChange(e, "GenderID")}
                >
                    <option value="">Choose a gender</option>
                    <option value={1}>Female</option>
                    <option value={2}>Male</option>
                </select>
            </div>      

            <div className="mt-2">
                <div className="text-xs text-left mb-2 xl:text-lg text-white">Phone Number</div>
                <input
                    id="PhoneNumber"
                    name="PhoneNumber"
                    type="text"
                    required
                    autoComplete="PhoneNumber"
                    className="block w-full rounded-full text-center bg-password py-3 text-white shadow-sm"
                    placeholder="Enter Phone Number"
                    value={formData.PhoneNumber}
                    onChange={(e) => handleInputChange(e, "PhoneNumber")}
                />
            </div>

            <div className="mt-2">
                <div className="text-xs text-left mb-2 xl:text-lg text-white">Email</div>
                <input
                    id="Email"
                    name="Email"
                    type="email"
                    required
                    autoComplete="Email"
                    className="block w-full rounded-full text-center bg-password py-3 text-white shadow-sm"
                    placeholder="Enter email"
                    value={formData.Email}
                    onChange={(e) => handleInputChange(e, "Email")}
                />
            </div>

            <div className="mt-2">
                <div className="text-xs text-left mb-2 xl:text-lg text-white">Username</div>
                <input
                    id="Username"
                    name="Username"
                    type="text"
                    required
                    autoComplete="Username"
                    className="block w-full rounded-full text-center bg-password py-3 text-white shadow-sm"
                    placeholder="Enter username"
                    value={formData.UserName}
                    onChange={(e) => handleInputChange(e, "UserName")}
                />
            </div>

            <div className="mt-2">
                <div className="text-xs text-left mb-2 xl:text-lg text-white">Password</div>
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="password"
                    className="block w-full rounded-full text-center bg-password py-3 text-white shadow-sm"
                    placeholder="Enter password"
                    value={formData.Password}
                    onChange={(e) => handleInputChange(e, "Password")}
                />
            </div>      

            <button onClick={handleSubmit} className="btn-submit mt-4">
                Submit
            </button>
        </div>
    );
};

export default CreateForm;
