import { useState } from "react";
import "./Form.css";
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

        const ValidationErrors = ValidateForm();
        SetError(ValidationErrors);

        if (Object.keys(ValidationErrors).
            length === 0) {
            console.log("successfull");
            console.log(formData);
            setSuccess("Registration Successful!");
        }
    };




    return (<>
        <div className="form_container">
            <h1 className="heading">Registration Form</h1>
            <div className="form_row">
                <div className="Sublevel">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        placeholder=" Enter your full Name" required
                    />
                </div>
                <div className="Sublevel">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        placeholder=" Enter your Email" required
                    />
                </div>
                <div className="Sublevel">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        placeholder="password" required
                    />
                </div>
                <div className="Sublevel">
                    <label>Confirm Passwrod</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={handleChange}
                        placeholder="confirm Password" required
                    />
                </div>
                <div className="Sublevel">
                    <label>Phone No.:</label>
                    <input
                        type="tel"
                        name="phone"
                        onChange={handleChange}
                        placeholder="phone Number" required
                    />
                </div>
                <div className="Sublevel">
                    <label>Age:</label>
                    <input
                        type="tel"
                        name="age"
                        onChange={handleChange}
                        placeholder="Age" required
                    />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="button">
                        <button className="btn" type="submit">
                            Register
                        </button>
                    </div>
                </form>
                {error.name && (<p>{error.name}</p>)}
                {error.email && (<p>{error.email}</p>)}
                {error.password && (<p>{error.password}</p>)}
                {error.confirmPassword && (<p>{error.confirmPassword}</p>)}
                {error.phone && (<p>{error.phone}</p>)}
                {error.age && (<p>{error.age}</p>)}
                {success && (
                    <p className="success">
                        ✓ {success}
                    </p>
                )}
                {error.name && <p className="error">❌ {error.name}</p>}
                {error.password && <p className="error">❌ {error.password}</p>}
                {error.confirmPassword && <p className="error">❌ {error.confirmPassword}</p>}
                {error.phone && <p className="error">❌ {error.phone}</p>}
                {error.age && <p className="error">❌ {error.age}</p>}
            </div>
        </div>
    </>)
}
export default Form;