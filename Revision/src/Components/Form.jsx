import "./Form.css"
import { useState } from "react";
function Form() {
    const [name, setname] = useState("");
    const [email, SetEmail] = useState("");
    const [Course, SetCourse] = useState("");
    function handleChange(event) {
        setname(event.target.value)
    }
    function handleEmailChange(event) {
        SetEmail(event.target.value);
    }

    function handleCourseChange(event) {
        SetCourse(event.target.value);
    }
    function handlesubmit(event) {
        event.preventDefault()
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Course:", Course);
        console.log("form is submitted")
    }
    return (
        <form onSubmit={handlesubmit}>
            <div className="form-container">
                <h1 className="header">Student Registration</h1>
                <label className="lab">Name</label>
                <input className="input" type="text" onChange={handleChange} placeholder="enter your name" required />

                <label className="lab">Email</label>
                <input className="input" type="Email" onChange={handleEmailChange} placeholder="enter your Email" required />

                <label className="lab">Course</label>
                <input className="input" type="text" onChange={handleCourseChange} placeholder="enter your Course" required />

                <button className="btn" type="submit">submit</button>

            </div>
        </form>



    )
}
export default Form;