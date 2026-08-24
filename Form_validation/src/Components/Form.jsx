import { useState } from "react";
// import "./From.css";
function Form() {
    const [formData, SetfromData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        age: "",
    })
    const [error, SetError] = useState({})
    const [success, setSuccess] = useState("");
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    const handleChange = (e) => {
        SetfromData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const ValidateForm = () => {
        let newError = {};
        if (!formData.name.trim()) {
            newError.name = "Name is Requried"
        }
        else if (!nameRegex.test(formData.name)) {
            newError.name = "Name contain only letter";
        }
        if (!formData.email.trim()) {
            newError.email = "Email is Requried"
        }
        else if (!emailRegex.test(formData.email)) {
            newError.email = "Enter a valid Email";
        }
        if (!formData.password.trim()) {
            newError.password = "password is Requried"
        }
        else if (!passwordRegex.test(formData.password)) {
            newError.password = "enter a valid password"
        }
        if (!formData.confirmPassword.trim()) {
            newError.confirmPassword = "Confirm Password is Required"
        }
        else if (formData.confirmPassword !== formData.password) {
            newError.confirmPassword = "password do not match"
        }
        if (!formData.phone.trim()) {
            newError.phone = "phone number is requried"
        }
        else if (!phoneRegex.test(formData.phone)) {
            newError.phone = "enter a valid phone number"
        }
        if (!formData.age.trim()) {
            newError.age = "Age is Required";
        }
        else if (formData.age < 18 || formData.age > 60) {
            newError.age = "Age must be between 18 and 60";
        }

        return newError;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    
    const ValidationErrors=ValidateForm();
    SetError(ValidationErrors);
    
    if(Object.keys(ValidationErrors).
    length===0){
        console.log("successfull");
        console.log(formData);
         setSuccess("Registration Successful!");
    }
};




    return (<>
        <h1>Registration Form</h1>
        <label>Name</label>
        <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Name"
        />
        <label>Email:</label>
        <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
        />
        <label>Password:</label>
        <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
        />
        <label>Confirm Passwrod</label>
        <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            placeholder="confirm Password"
        />
        <label>Phone No.</label>
        <input
            type="number"
            name="phone"
            onChange={handleChange}
            placeholder="phone Number"
        />
        <label>Age</label>
        <input
            type="number"
            name="age"
            onChange={handleChange}
            placeholder="Age"
        />
        <form onSubmit={handleSubmit}>
        
            <button className="btn" type="submit">
                Register
            </button>
            </form>
            {error.name &&(<p>{error.name}</p>)}
            {error.email &&(<p>{error.email}</p>)}
            {error.password &&(<p>{error.password}</p>)}
            {error.confirmPassword &&(<p>{error.confirmPassword}</p>)}
            {error.phone && (<p>{error.phone}</p>)}
            {error.age && (<p>{error.age}</p>)}
            {success && <p>{success}</p>}
        
    </>)
}
export default Form;