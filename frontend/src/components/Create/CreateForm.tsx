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
            {/* Add other input fields similarly for LastName, Email, etc. */}
            <button onClick={handleSubmit} className="btn-submit mt-4">
                Submit
            </button>
        </div>
    );
};

export default CreateForm;
