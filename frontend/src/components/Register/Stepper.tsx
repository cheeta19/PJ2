import React, { useState } from "react";
import { MembersInterface } from "../../interface/IMembers"; // นำเข้า interface
import { CreateMember } from "../../service/https";

const Stepper: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
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

    const steps = ["Personal Info", "Contact", "Account Info"];

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        field: keyof MembersInterface
    ) => {
        setFormData({
            ...formData,
            [field]: field === 'GenderID' ? Number(e.target.value) : e.target.value,
        });
    };
    

    const validateStep = () => {
        switch (currentStep) {
            case 1:
                return formData.FirstName && formData.LastName && formData.GenderID && formData.Age;
            case 2:
                return formData.PhoneNumber && formData.Email;
            case 3:
                return formData.UserName && formData.Password;
            default:
                return false;
        }
    };

    const handleSubmit = async () => {
        try {
            console.log("Form Data:", formData);
            let res = await CreateMember(formData); // ส่งข้อมูล formData ไปที่ API
            console.log(res);
            if (res) {
                alert('ข้อมูลของท่านเข้าสู่ระบบ');
                // Reset form or navigate user
            } else if (res.errors) {
                console.log('Errors:', res.errors);
                // If the API returns specific errors
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

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <div className="mt-2">
                            <div className="text-xs text-left mb-2 xl:text-lg text-white">Firstname</div>
                            <input
                                id="Firstname"
                                name="Firstname"
                                type="text"
                                required
                                autoComplete="Firstname"
                                className="block w-full rounded-full text-center bg-password py-3 text-white shadow-sm"
                                placeholder="Enter firstname"
                                value={formData.FirstName}
                                onChange={(e) => handleInputChange(e, "FirstName")}
                            />
                        </div>
                        <div className="mt-2">
                            <div className="text-xs text-left mb-2 xl:text-lg text-white">Lastname</div>
                            <input
                                id="Lastname"
                                name="Lastname"
                                type="text"
                                required
                                autoComplete="Lastname"
                                className="block w-full rounded-full text-center bg-password py-3 text-white shadow-sm"
                                placeholder="Enter lastname"
                                value={formData.LastName}
                                onChange={(e) => handleInputChange(e, "LastName")}
                            />
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
                    </div>
                );
            case 2:
                return (
                    <div>
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
                    </div>
                );
            case 3:
                return (
                    <div>
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
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="flex justify-between mb-10">
                {steps.map((step, index) => (
                    <div key={index} className={`relative flex-1 text-center ${index + 1 <= currentStep ? "text-hover" : "text-white"}`}>
                        <div
                            className={`absolute inset-x-0 top-1/2 transform -translate-y-1/2 ${
                                index + 1 < currentStep ? "border-hover" : "border-gray-300"
                            }`}
                        ></div>
                        <div
                            className={`relative inline-flex items-center justify-center w-8 h-8 rounded-full border ${
                                index + 1 <= currentStep ? "border-hover bg-hover text-white" : "border-gray-300"
                            }`}
                        >
                            {index + 1}
                        </div>
                        <p className="mt-2">{step}</p>
                    </div>
                ))}
            </div>
            <div className="mb-[5px]">{renderStepContent()}</div>
            <div className="flex justify-between mt-10">
                <button
                    onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                >
                    Previous
                </button>
                {currentStep === steps.length ? (
                    <button
                    onClick={() => {
                        if (validateStep()) {
                            handleSubmit(); // เรียกใช้ฟังก์ชัน handleSubmit()
                        } else {
                            alert("Please fill out all fields before proceeding.");
                        }
                    }}
                        className="px-4 py-2 bg-hover text-white rounded"
                    >
                        Confirm Data
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            if (validateStep()) {
                                setCurrentStep((prev) => Math.min(prev + 1, steps.length));
                            } else {
                                alert("Please fill out all fields before proceeding.");
                            }
                        }}
                        className="px-4 py-2 bg-hover text-white rounded"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default Stepper;
